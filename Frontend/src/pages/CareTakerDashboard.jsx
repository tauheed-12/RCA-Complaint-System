import React, { useEffect, useState } from "react";
import { SidebarComponent } from "../components/CareTakerDashboard/sidebar";
import { BreadcrumbComponent } from "../components/CareTakerDashboard/breadcrumb";
import { CardComponent } from "../components/CareTakerDashboard/card";
import { DropdownComponent } from "../components/CareTakerDashboard/dropdown";
import "../components/CareTakerDashboard/styles.css";
import { Navbar } from "../components/CareTakerDashboard/navbar";
import { ProfileCard } from "../components/CareTakerDashboard/hero";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const CareTakerDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId, token } = useAuth();
  const [careTakerData, setCareTakerData] = useState({
    name: "",
    hostel: "",
    roomNumber: "",
    numberOfComplaints: 0,
    complaints: [],
  });

  useEffect(() => {
    const fetchCareTakerData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          "http://localhost:8080/careTaker/getComplaints",
          {
            params: { userId },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { user, complaints } = response.data;
        setCareTakerData({
          ...user,
          numberOfComplaints: complaints.length,
          complaints: complaints,
        });
      } catch (error) {
        setError("Failed to load caretaker data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchCareTakerData();
  }, [userId, token]);

  if (loading) {
    return <h1>Loading the caretaker data...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProfileCard careTakerData={careTakerData} />

      <div className="flex grow">
        <aside className="h-full w-64 shrink-0">
          <SidebarComponent />
        </aside>
        <div className="flex grow flex-col">
          <div className="p-4">
            <BreadcrumbComponent />
          </div>
          <div className="flex flex-1 flex-col p-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-black text-desktop-heading font-ginto-nord">
                Manage Complaints
              </h2>
              <div className="flex items-center gap-4">
                <DropdownComponent />
              </div>
            </div>
            <main className="scrollable-content max-h-[calc(100vh-13rem)] grow p-4">
              <div className="flex flex-wrap gap-4">
                <CardComponent complaints={careTakerData.complaints} />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareTakerDashboard;
