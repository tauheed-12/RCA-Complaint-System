import React from "react";
import { BreadcrumbComponent } from "../components/breadcrumb";
import { SidebarComponent } from "../components/sidebar";

// Ensure each complaint has a 'type' property
const feedbackData = {
  complaints: [
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
      type: "escalated", // Added type here
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
      type: "critical", // Added type here
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
  ],
};

const FeedbackComponent = () => {
  return (
    <div className="flex min-h-screen flex-col dark:bg-gray-800">
      <div className="flex grow">
        {/* Sidebar on the left with fixed width */}
        <aside className="h-full w-64 shrink-0 bg-gray-800">
          <SidebarComponent />
        </aside>

        {/* Main content area */}
        <div className="flex grow flex-col">
          {/* Breadcrumb below the banner and to the right of the sidebar */}
          <div className="bg-gray-800 p-4">
            <BreadcrumbComponent />
          </div>

          {/* Table for displaying feedback */}
          <div className="grow overflow-x-auto p-6">
            <table className="min-w-full bg-white dark:bg-gray-900">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2">ID</th>
                  <th className="border-b px-4 py-2">Status</th>
                  <th className="border-b px-4 py-2">Type</th>
                  <th className="border-b px-4 py-2">Description</th>
                  <th className="border-b px-4 py-2">Reported At</th>
                  <th className="border-b px-4 py-2">Resolved At</th>
                  <th className="border-b px-4 py-2">Remarks</th>
                  <th className="border-b px-4 py-2">Ratings</th>
                </tr>
              </thead>
              <tbody>
                {feedbackData.complaints.map((complaint) => (
                  <tr key={complaint.id}>
                    <td className="border-b px-4 py-2">{complaint.id}</td>
                    <td className="border-b px-4 py-2">{complaint.status}</td>
                    <td className="border-b px-4 py-2">{complaint.type}</td>
                    <td className="border-b px-4 py-2">
                      {complaint.details.description}
                    </td>
                    <td className="border-b px-4 py-2">
                      {new Date(complaint.details.reported_at).toLocaleString()}
                    </td>
                    <td className="border-b px-4 py-2">
                      {complaint.status === "closed" &&
                      complaint.details.resolved_at
                        ? new Date(
                            complaint.details.resolved_at,
                          ).toLocaleString()
                        : "-"}
                    </td>
                    <td className="border-b px-4 py-2">
                      {complaint.status === "closed" && complaint.feedback
                        ? complaint.feedback.remarks
                        : "-"}
                    </td>
                    <td className="border-b px-4 py-2">
                      {complaint.status === "closed" && complaint.feedback
                        ? complaint.feedback.ratings
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackComponent;
