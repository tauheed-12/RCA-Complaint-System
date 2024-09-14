"use client";

import React, { useState } from "react";
import { Button, Label, TextInput, Card } from "flowbite-react";
import { BreadcrumbComponent } from "../components/breadcrumb";
import { SidebarComponent } from "../components/sidebar"; // Ensure you have this component

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

const CheckStatus = () => {
  const [problemId, setProblemId] = useState("");
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setProblemId(event.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (problemId) {
      // Filter complaints based on the Problem ID entered
      const filtered = complaints.filter((complaint) =>
        complaint.id.toLowerCase().includes(problemId.toLowerCase()),
      );
      setFilteredComplaints(filtered);
    } else {
      // Clear filtered complaints if no Problem ID is entered
      setFilteredComplaints([]);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar on the left with fixed width */}
      <aside className="h-full w-64 bg-gray-800">
        <SidebarComponent />
      </aside>

      <div className="flex flex-1 flex-col">
        <div className="bg-gray-800 p-4">
          <BreadcrumbComponent />
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex-1">
                <Label htmlFor="ProblemID" />
                <TextInput
                  id="ProblemID"
                  type="text"
                  placeholder="Enter Problem ID"
                  required
                  value={problemId}
                  onChange={handleInputChange}
                />
              </div>
              <Button type="button" onClick={handleSubmit} className="shrink-0">
                Submit
              </Button>
            </div>
          </div>

          {isSubmitted && (
            <div className="mt-8 flex w-full max-w-md flex-col items-center">
              {filteredComplaints.length > 0 ? (
                filteredComplaints.map((complaint) => (
                  <Card
                    key={complaint.id}
                    href="#"
                    className="mx-2 my-4 w-full"
                  >
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                        ? new Date(
                            complaint.details.reported_at,
                          ).toLocaleString()
                        : "N/A"}
                    </p>
                    {complaint.status === "closed" && (
                      <>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          Resolved At:{" "}
                          {complaint.details.resolved_at
                            ? new Date(
                                complaint.details.resolved_at,
                              ).toLocaleString()
                            : "N/A"}
                        </p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          Feedback:{" "}
                          {complaint.feedback?.remarks ||
                            "No feedback available"}
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
                ))
              ) : (
                <p className="text-gray-700 dark:text-gray-400">
                  No complaints found.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckStatus;
