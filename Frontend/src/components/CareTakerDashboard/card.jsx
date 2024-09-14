"use client";

import { Card } from "flowbite-react";

// Example JSON data
const complaints = [
  {
    id: "complaint_001",
    status: "open",
    type: "escalated",
    details: {
      description: "Service outage affecting multiple users.",
      reported_at: "2024-08-20T14:32:00Z",
    },
  },
  {
    id: "complaint_002",
    status: "open",
    type: "non escalated",
    details: {
      description: "Delay in delivery of order.",
      reported_at: "2024-08-21T09:15:00Z",
    },
  },
  {
    id: "complaint_003",
    status: "open",
    type: "critical",
    details: {
      description: "Security breach detected in the system.",
      reported_at: "2024-08-22T11:45:00Z",
    },
  },
  {
    id: "complaint_004",
    status: "closed",
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
    <div className="flex flex-wrap">
      {complaints.map((complaint) => (
        <Card
          key={complaint.id}
          href="#"
          className="mx-2 my-4 w-full sm:w-1/2 lg:w-1/3 bg-white"
        >
          <h5 className="text-xl font-bold tracking-tight">
            Complaint ID: {complaint.id}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Status: {complaint.status}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Type: {complaint.type}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Description: {complaint.details.description}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Reported At:{" "}
            {complaint.details.reported_at
              ? new Date(complaint.details.reported_at).toLocaleString()
              : "N/A"}
          </p>
          {complaint.status === "closed" && (
            <>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Resolved At:{" "}
                {complaint.details.resolved_at
                  ? new Date(complaint.details.resolved_at).toLocaleString()
                  : "N/A"}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Feedback:{" "}
                {complaint.feedback?.remarks || "No feedback available"}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Rating:{" "}
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
