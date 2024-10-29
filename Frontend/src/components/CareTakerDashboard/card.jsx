import axios from 'axios'
import { useAuth } from '../../context/AuthContext.js';

import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
export function CardComponent({ complaints }) {
  console.log(complaints);
  const { token, setRefresh } = useAuth();

  const handleUpdate = async (complaintId, status) => {
    let newStatus;
    if (status === "Pending") {
      newStatus = "In Progress"
    } else if (status === "In Progress") {
      newStatus = "Resolved"
    } else if (status === 'Resolved') {
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/caretaker/updateStatus', { complaintId, status: newStatus }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      setRefresh(prev => prev + 1);
    } catch (error) {
      console.log("Error occurred during updating status", error);
    }
  }

  return (
    <div className="flex flex-wrap w-full">
      {complaints.map((complaint) => (
        <Card
          key={complaint._id}
          class="mx-2 my-4 w-full rounded-md bg-jmi-grey !important text-black"
        >
          <div className="flex justify-between gap-2">
            <h5 className="text-xl font-bold tracking-tight">
              {complaint.title}
            </h5>
            {complaint.status !== 'Resolved' && (
              <button
                className="bg-green-300 text-white px-6 py-1 text-xl font-bold hover:bg-green-800 hover:text-white"
                onClick={() => handleUpdate(complaint._id, complaint.status)}>
                UPDATE
              </button>
            )}
            {complaint.images.map((img, id) => (
              <Link className='text-blue font-bold underline' to={img}>IMAGE {id + 1}</Link>
            ))}
          </div>
          <p className="font-normal text-gray-700 ">
            <span className="text-jmi-green font-semibold">Status:</span> {complaint.status}
          </p>
          <p className="font-normal text-gray-700">
            <span className="text-jmi-green">Complaint ID:</span> {complaint._id}
          </p>
          <p className="font-normal text-gray-700">
            <span className="text-jmi-green">Description:</span> {complaint.description}
          </p>
          <p className="font-normal text-gray-700">
            <span className="text-jmi-green">Reported At:</span>{" "}
            {complaint?.createdAt
              ? new Date(complaint.createdAt).toLocaleString()
              : "N/A"}
          </p>
          {(complaint.status === "In Progress" || complaint.status === "Resolved") && (
            <>
              <p className="font-normal text-gray-700">
                <span className="text-jmi-green">Updated At:</span>{" "}
                {complaint?.updatedAt
                  ? new Date(complaint.updatedAt).toLocaleString()
                  : "N/A"}
              </p>
              {/* <p className="font-normal text-gray-700">
                <span className="text-jmi-green">Feedback:</span>{" "}
                {complaint?.feedback?.remarks || "No feedback available"}
              </p>
              <p className="font-normal text-gray-700">
                <span className="text-jmi-green">Rating:</span>{" "}
                {complaint?.feedback?.ratings !== undefined
                  ? complaint.feedback.ratings
                  : "No rating available"}
              </p> */}
            </>
          )}
        </Card>
      ))}
    </div>
  );
}
