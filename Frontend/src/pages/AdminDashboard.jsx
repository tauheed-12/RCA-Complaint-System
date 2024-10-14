import React from 'react'
import { Link } from 'react-router-dom'; // Make sure to import Link

const AdminDashboard = () => {
    return (
        <div className="flex flex-col h-screen bg-jmi-grey">
            {/* Header */}
            <header className="flex justify-between items-center w-full p-2 bg-white shadow-md">
                <h1 className="text-3xl font-bold text-jmi-green">Admin Dashboard</h1>
                <button className="px-4 py-2 text-white bg-jmi-green rounded hover:bg-jmi-hovergreen">
                    Logout
                </button>
            </header>

            {/* Main Section - Centered Boxes */}
            <div className="flex flex-1 justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 p-10">
                    {/* Caretakers Box */}
                    <div className="bg-white shadow-xl p-10 rounded-lg text-center w-80 h-40">
                        <h2 className="text-xl font-semibold mb-4">List of Caretakers</h2>
                        <Link to="/admin/dashboard/caretakers">
                            <button className="px-4 py-2 bg-jmi-green text-white rounded hover:bg-jmi-hovergreen">
                                Go to List
                            </button>
                        </Link>
                    </div>

                    {/* Verify Caretakers Box */}
                    <div className="bg-white shadow-xl p-10 rounded-lg text-center w-80 h-40">
                        <h2 className="text-xl font-semibold mb-4">Verify Caretakers</h2>
                        <Link to="/admin/dashboard/verifycaretakers">
                            <button className="px-4 py-2 bg-jmi-green text-white rounded hover:bg-jmi-hovergreen">
                                Go to Verification
                            </button>
                        </Link>
                    </div>

                    {/* Complaint Verification Box */}
                    <div className="bg-white shadow-xl p-10 rounded-lg text-center w-80 h-40">
                        <h2 className="text-xl font-semibold mb-4">Complaint Verification</h2>
                        <Link to="/admin/dashboard/complaint">
                            <button className="px-4 py-2 bg-jmi-green text-white rounded hover:bg-jmi-hovergreen">
                                Verify Complaints
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;


