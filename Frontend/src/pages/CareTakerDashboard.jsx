import React from "react";
import { SidebarComponent } from "../components/CareTakerDashboard/sidebar";
import { BreadcrumbComponent } from "../components/CareTakerDashboard/breadcrumb";
import { CardComponent } from "../components/CareTakerDashboard/card";
import { DropdownComponent } from "../components/CareTakerDashboard/dropdown";
import "../components/CareTakerDashboard/styles.css";
import { Navbar } from "../components/CareTakerDashboard/navbar";
import { ProfileCard } from "../components/CareTakerDashboard/hero";


const CareTakerDashboard = ({ name }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProfileCard />

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
                <CardComponent />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareTakerDashboard;
