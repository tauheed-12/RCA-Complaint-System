"use client";

import { Card } from "flowbite-react";

// Example JSON data
const complaints = [
  {
    id: "complaint_001",
    status: "open",
    title: "Water leakage",
    room : "34",
    type: "escalated",
    details: {
      description: "Service outage affecting multiple users.",
      reported_at: "2024-08-20T14:32:00Z",
    },
  },
  {
    id: "complaint_002",
    status: "open",
    title:"Power Socket not Working",
    room : "3",
    type: "non escalated",
    details: {
      description: "Delay in delivery of order.",
      reported_at: "2024-08-21T09:15:00Z",
    },
  },
  {
    id: "complaint_003",
    status: "open",
    title: "Can't Survive in this hostel",
    room : "44",
    type: "critical",
    details: {
      description: "Security breach detected in the system.",
      reported_at: "2024-08-22T11:45:00Z",
    },
  },
  {
    id: "complaint_004",
    status: "closed",
    title:"Unheigenic Roommate",
    room : "4",
    history: {
      escalated: true,
      critical: false,
    },
    feedback: {
      remarks: "Issue resolved, but took longer than expected.",
      ratings: 3,
    },
    details: {
      description: "Customer service response delay.",
      reported_at: "2024-08-18T10:05:00Z",
      resolved_at: "2024-08-22T15:20:00Z",
    },
  },
  {
    id: "complaint_005",
    status: "closed",
    title:"Water Leak",
    room : "67",
    history: {
      escalated: false,
      critical: true,
    },
    feedback: {
      remarks: "Critical issue handled well with timely updates.",
      ratings: 5,
    },
    details: {
      description: "System outage affecting critical services.",
      reported_at: "2024-08-19T16:25:00Z",
      resolved_at: "2024-08-21T12:00:00Z",
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
          <div className="flex justify-between gap-2">
          <h5 className="text-xl font-bold tracking-tight">
            {complaint.title}
          </h5>
          <h5 className="text-jmi-green font-bold hover:underline">
            UPDATE
          </h5>
          </div>
          <p className="font-normal text-gray-700 ">
            <span className="text-jmi-green font-semibold">Status:</span> {complaint.status}
          </p>
          <p className="font-normal text-gray-700">
          <span className="text-jmi-green">Complaint ID:</span> {complaint.id}
          </p>
          <p className="font-normal text-gray-700">
          <span className="text-jmi-green">Type:</span> {complaint.type}
          </p>
          <p className="font-normal text-gray-700">
          <span className="text-jmi-green">Room no. :</span> {complaint.room}
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
