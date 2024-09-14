"use client";

import { Sidebar } from "flowbite-react";
// import { RatingComponent } from "./rating";
import { BiBuoy } from "react-icons/bi";
import { HiChartPie, HiInbox, HiUser, HiViewBoards } from "react-icons/hi";

export function SidebarComponent() {
  return (
    <Sidebar
      aria-label="Sidebar with content separator example"
      className="h-screen overflow-y-auto"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Update details
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Update Status
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Escalate
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            View feedback
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          {/* Add logic to display the number of cards in the pages these buttons redirect to */}
          {/* Add logic to connect the buttons to their pages. */}
          <Sidebar.Item href="#" icon={HiChartPie}>
            Resolved
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Un-Resolved
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Critical
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        {/*<Sidebar.ItemGroup>
          { Add logic to connect the buttons to their pages. Also to group and show those with respective stars selected }
          { need to update that later on, different levers of rating. maybe create duplicate components for each rating and do it the hard way }
          <Sidebar.Item href="#">
            <RatingComponent />
          </Sidebar.Item>
          <Sidebar.Item href="#">
            <RatingComponent />
          </Sidebar.Item>
          <Sidebar.Item href="#">
            <RatingComponent />
          </Sidebar.Item>
        </Sidebar.ItemGroup>*/}
      </Sidebar.Items>
    </Sidebar>
  );
}
