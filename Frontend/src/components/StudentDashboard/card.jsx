import axios from "axios";
import { Card } from "flowbite-react";
import { useAuth } from "../../context/AuthContext";

export function CardComponent({ studentComplaint }) {
  const { token } = useAuth();
  console.log(studentComplaint);
  const handleDelete = async () => {
    try {
      const complaintId = studentComplaint._id;
      const response = await axios.get('http://localhost:8080/student/deleteComplaint', {
        params: { complaintId },
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);

    } catch (error) {
      console.log("Error during deleting the student complaint", error)
    }
  }
  return (
    <div className="flex flex-wrap w-full">
      <Card
        key={studentComplaint._id}
        href="#"
        class="mx-2 my-4 w-full rounded-md bg-jmi-grey !important text-black"
      >
        <div className="flex justify-between gap-2">
          <h5 className="text-xl font-bold tracking-tight">
            {studentComplaint.title}
          </h5>
          <h5 className="text-red-600 font-bold hover:underline" onClick={handleDelete}>
            DELETE
          </h5>
        </div>

        <p className="font-normal text-gray-700 ">
          <span className="text-jmi-green font-semibold">Status:</span> {studentComplaint.status}
        </p>
        <p className="font-normal text-gray-700 ">
          <span className="text-jmi-green">Complaint ID:</span> {studentComplaint._id}
        </p>
        <p className="font-normal text-gray-700">
          <span className="text-jmi-green">Type:</span> {studentComplaint.title}
        </p>
        <p className="font-normal text-gray-700">
          <span className="text-jmi-green">Description:</span> {studentComplaint.description}
        </p>
        <p className="font-normal text-gray-700">
          <span className="text-jmi-green">Reported At:</span>{" "}
          {studentComplaint.createdAt
            ? new Date(studentComplaint.createdAt).toLocaleString()
            : "N/A"}
        </p>
        {studentComplaint.status === "closed" && (
          <>
            <p className="font-normal text-gray-700">
              <span className="text-jmi-green">Resolved At:</span>{" "}
              {studentComplaint.updatedAt
                ? new Date(studentComplaint.updatedAt).toLocaleString()
                : "N/A"}
            </p>
            <p className="font-normal text-gray-700">
              <span className="text-jmi-green">Feedback:</span>{" "}
              {studentComplaint.updatedAt || "No feedback available"}
            </p>
          </>
        )}
      </Card>
    </div>
  );
}
