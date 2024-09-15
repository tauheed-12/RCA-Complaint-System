"use client";

import { Card } from "flowbite-react";

// Example JSON data
const complaints = [
  {
    id: "complaint_001",
    title:"Power Socket not working",
    status: "open",
    type: "escalated",
    details: {
      description: "Service outage affecting multiple users.",
      reported_at: "2024-08-20T14:32:00Z",
    },
  },
  {
    id: "complaint_002",
    title: "Water Leake",
    status: "open",
    type: "non escalated",
    details: {
      description: "Delay in delivery of order.",
      reported_at: "2024-08-21T09:15:00Z",
    },
  },
];

export function CardComponent() {
  return (
    <div className="flex flex-wrap w-full">
      {complaints.map((complaint) => (
        <Card
          key={complaint.id}
          href="#"
          class="mx-2 my-4 w-full rounded-md bg-jmi-grey !important text-black"
        >
          <div className="flex justify-between">
          <h5 className="text-xl font-bold tracking-tight">
            {complaint.title}
          </h5>
          <h5 className="text-red-600 font-bold hover:underline">
            DELETE
          </h5>
          </div>
          
          <p className="font-normal text-gray-700 ">
            <span className="text-jmi-green font-semibold">Status:</span> {complaint.status}
          </p>
          <p className="font-normal text-gray-700 ">
            <span className="text-jmi-green">Complaint ID:</span> {complaint.id}
          </p>
          <p className="font-normal text-gray-700">
          <span className="text-jmi-green">Type:</span> {complaint.type}
          </p>
          <p className="font-normal text-gray-700">
          <span className="text-jmi-green">Description:</span> {complaint.details.description}
          </p>
          <p className="font-normal text-gray-700">
          <span className="text-jmi-green">Reported At:</span>{" "}
            {complaint.details.reported_at
              ? new Date(complaint.details.reported_at).toLocaleString()
              : "N/A"}
          </p>
          {complaint.status === "closed" && (
            <>
              <p className="font-normal text-gray-700">
              <span className="text-jmi-green">Resolved At:</span>{" "}
                {complaint.details.resolved_at
                  ? new Date(complaint.details.resolved_at).toLocaleString()
                  : "N/A"}
              </p>
              <p className="font-normal text-gray-700">
              <span className="text-jmi-green">Feedback:</span>{" "}
                {complaint.feedback?.remarks || "No feedback available"}
              </p>
              <p className="font-normal text-gray-700">
              <span className="text-jmi-green">Rating:</span>{" "}
                {complaint.feedback?.ratings !== undefined
                  ? complaint.feedback.ratings
                  : "No rating available"}
              </p>
            </>
          )}
        </Card>
      ))}
    </div>
  );
}
