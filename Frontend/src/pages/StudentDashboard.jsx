import React, { useEffect, useState } from "react";
import { SidebarComponent } from "../components/StudentDashboard/sidebar";
import { BreadcrumbComponent } from "../components/StudentDashboard/breadcrumb";
import { CardComponent } from "../components/StudentDashboard/card";
import { DropdownComponent } from "../components/StudentDashboard/dropdown";
import "../components/CareTakerDashboard/styles.css";
import { Navbar } from "../components/StudentDashboard/StudentNavbar";
import { StudentProfileCard } from "../components/StudentDashboard/StudentHero";
import axios from "axios";
import { useAuth } from "../context/AuthContext";


const Dashboard = () => {
  const [studentData, setStudentData] = useState({
    studentName: "John Doe",
    hostel: "HostelA",
    roomNumber: 12,
    numberOfComplaints: 0,
    complaints: [{
      title: "something",
      description: "test",
      complaintId: "24",
      createdAt: "sf",
      status: "pending"
    }]
  })
  const { userId } = useAuth();

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = axios.get('http://localhost:8080/student/allComplaints', { userId });
        console.log(response.data);
        setStudentData(response.data.responseData)
      } catch (error) {
        console.log("Error during fetching students complaint")
      }
    }
    fetchComplaint();
  }, [userId]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <StudentProfileCard studentProfileData={studentData} />

      <div className="flex grow">
        <aside className="h-full w-64 shrink-0 hidden xl:block">
          <SidebarComponent />
        </aside>

        <div className="flex grow flex-col">
          <div className="p-4">
            <BreadcrumbComponent />
          </div>

          <div className="flex flex-1 flex-col p-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-black text-desktop-heading font-ginto-nord">
                My Complaints
              </h2>
              <div className="flex items-center gap-4">
                <DropdownComponent />
              </div>
            </div>

            <main className="scrollable-content max-h-[calc(100vh-13rem)] grow p-4">
              <div className="flex flex-wrap gap-4 w-full">
                {studentData.complaints.map((complaint, id) => (
                  <CardComponent studentComplaints={complaint} key={id} />
                ))}
              </div>
            </main>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
