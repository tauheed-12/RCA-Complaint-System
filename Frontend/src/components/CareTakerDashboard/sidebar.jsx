"use client";

import { Sidebar, Flowbite, CustomFlowbiteTheme } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiChartPie, HiInbox, HiUser, HiViewBoards } from "react-icons/hi";

const customTheme = {
  sidebar: {
    "root": {
      "base": "h-full bg-jmi-green",
      "collapsed": {
        "on": "w-16",
        "off": "w-64"
      },
      "inner": "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 px-3 py-4 dark:bg-jmi-green",
    },
    item: {
      base: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-jmi-grey dark:hover:text-black", 
      icon: "w-6 h-6 text-gray-500 transition duration-75 group-hover:text-white",
    },
    
  }
};

export function SidebarComponent() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Sidebar aria-label="Sidebar with green background" className="h-screen">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Update Details
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              Escalate
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
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
        </Sidebar.Items>
      </Sidebar>
    </Flowbite>
  );
}
