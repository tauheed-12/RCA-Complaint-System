import React from "react";
import { SidebarComponent } from "../components/CareTakerDashboard/sidebar";
import { BreadcrumbComponent } from "../components/CareTakerDashboard/breadcrumb";
import { CardComponent } from "../components/CareTakerDashboard/card";
import { DropdownComponent } from "../components/CareTakerDashboard/dropdown";
import "../components/CareTakerDashboard/styles.css"; // Adjust the path as needed
import { Navbar } from "../components/CareTakerDashboard/navbar";
import { ProfileCard } from "../components/CareTakerDashboard/hero";


// Define the type for props

const CareTakerDashboard = ({ name }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProfileCard />
      {/* Banner Image Section */}
      {/* <div className="relative">
        <div
          className="h-40 w-full bg-cover bg-center"
          style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}
        >
          <div className="flex h-full items-center justify-center bg-black/50">
            <h1 className="text-4xl font-bold text-white">{name}</h1>
          </div>
        </div>
      </div> */}


      <div className="flex grow">
        {/* Sidebar on the left with fixed width */}
        <aside className="h-full w-64 shrink-0">
          <SidebarComponent />
        </aside>

        {/* Main content area */}
        <div className="flex grow flex-col">
          {/* Breadcrumb below the banner and to the right of the sidebar */}
          <div className="p-4">
            <BreadcrumbComponent />
          </div>

          {/* Manage Complaints Section */}
          <div className="flex flex-1 flex-col p-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-black text-desktop-heading font-ginto-nord">
                Manage Complaints
              </h2>
              <div className="flex items-center gap-4">
                <DropdownComponent /> {/* Use DropdownComponent for Filter */}
              </div>
            </div>

            {/* Scrollable card area */}
            <main className="scrollable-content max-h-[calc(100vh-13rem)] grow p-4">
              <div className="flex flex-wrap gap-4">
                <CardComponent />

                {/* Add more CardComponent as needed */}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareTakerDashboard;
