import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function ComplaintVerification() {
    const { token, userId } = useAuth();
    const [complaints, setComplaints] = useState([
        { id: 1, name: "Ayesha Siddiqui", complaint: "No hot water in Hostel A bathrooms", status: "Pending", lastUpdate: "2024-10-14", hostel: "Hostel A", date: "2024-10-12" },
        { id: 2, name: "Fatima Khan", complaint: "Leaking roof in Hostel B", status: "Under Review", lastUpdate: "2024-10-13", hostel: "Hostel B", date: "2024-10-10" },
        { id: 3, name: "Ali Raza", complaint: "AC not working in Hostel C", status: "Resolved", lastUpdate: "2024-10-15", hostel: "Hostel C", date: "2024-10-09" }
    ]);

    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        const fetchComplaint = async () => {
            try {
                const response = await axios.get('http://localhost:8080/admin/getAllComplaints', {
                    params: { userId },
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log(response.data);
                setComplaints(response.data);
            } catch (error) {
                console.log("Error fetching complaints in admin dashboard", error);
            }
        };
        fetchComplaint();
    }, [userId, token, refresh]);

    const handleStatusUpdate = async (id) => {
        const complaintToUpdate = complaints.find(complaint => complaint.id === id);
        let newStatus;

        switch (complaintToUpdate.status) {
            case 'Pending':
                newStatus = 'Under Review';
                break;
            case 'Under Review':
                newStatus = 'Resolved';
                break;
            case 'Resolved':
                return;
            default:
                newStatus = 'Pending';
        }

        try {
            const response = await axios.post('http://localhost:8080/careTaker/updateStatus', { complaintId: id, status: newStatus }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setComplaints(complaints.map(c => c.id === id ? { ...c, status: newStatus, lastUpdate: new Date().toISOString().slice(0, 10) } : c));
            console.log(response.data);
        } catch (error) {
            console.log("Error updating complaint status", error);
        }
    };

    const deleteComplaint = async (complaintId) => {
        console.log(complaintId);
        try {
            const response = await axios.get('http://localhost:8080/student/deleteComplaint', {
                params: { complaintId },
                headers: { Authorization: `Bearer ${token}` }
            });
            setComplaints(complaints.filter(complaint => complaint._id !== complaintId));
            console.log(response.data);
        } catch (error) {
            console.log("Error deleting the complaint", error);
        }
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Complaint Verification</h2>

            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="py-3 px-4 border-b">Name</th>
                        <th className="py-3 px-4 border-b">Complaint</th>
                        <th className="py-3 px-4 border-b">Hostel Name</th>
                        <th className="py-3 px-4 border-b">Date of Complaint</th>
                        <th className="py-3 px-4 border-b">Last Status Update</th>
                        <th className="py-3 px-4 border-b">Status</th>
                        <th className="py-3 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {complaints.map(complaint => (
                        <tr key={complaint.id} className="hover:bg-gray-100">
                            <td className="py-3 px-4 border-b">{complaint.title}</td>
                            <td className="py-3 px-4 border-b">{complaint.description}</td>
                            <td className="py-3 px-4 border-b">{complaint.hostel}</td>
                            <td className="py-3 px-4 border-b">{complaint.createdAt}</td>
                            <td className="py-3 px-4 border-b">{complaint.lastUpdate}</td>
                            <td className="py-3 px-4 border-b">{complaint.status}</td>
                            <td className="py-3 px-4 border-b">
                                <button
                                    onClick={() => handleStatusUpdate(complaint.id)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => deleteComplaint(complaint._id)}
                                    className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ComplaintVerification;
