"use client";

import { Dropdown } from "flowbite-react";

export function DropdownComponent() {
  return (
    <Dropdown label="Status" dismissOnClick={false} class="bg-jmi-green mr-10 rounded-lg">
      <Dropdown.Item>Resolved</Dropdown.Item>
      <Dropdown.Item>Open</Dropdown.Item>
      <Dropdown.Item>Pending</Dropdown.Item>


    </Dropdown>
  );
}
