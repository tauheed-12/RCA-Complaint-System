import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link
import { FaUsers, FaClipboardCheck, FaExclamationCircle, FaSignOutAlt } from 'react-icons/fa'; // Adding icons

const AdminDashboard = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Header */}
            <header className="flex justify-between items-center w-full p-4 bg-white shadow-md">
                <h1 className="text-4xl font-bold text-jmi-green">Admin Dashboard</h1>
                <button className="px-4 py-2 flex items-center gap-2 text-white bg-red-500 rounded hover:bg-red-600 transition">
                    <FaSignOutAlt className="text-lg" />
                    Logout
                </button>
            </header>

            {/* Main Dashboard Grid */}
            <div className="flex flex-1 justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 p-10 max-w-screen-lg mx-auto">

                    {/* Caretakers Section */}
                    <div className="bg-white shadow-lg p-8 rounded-lg text-center hover:shadow-2xl transition">
                        <FaUsers className="text-jmi-green text-4xl mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">List of Caretakers</h2>
                        <p className="text-gray-500 mb-6">Manage and view all registered caretakers</p>
                        <Link to="/admin/dashboard/caretakers">
                            <button className="px-6 py-2 bg-jmi-green text-white rounded-lg hover:bg-jmi-hovergreen transition">
                                Go to List
                            </button>
                        </Link>
                    </div>

                    {/* Verify Caretakers Section */}
                    <div className="bg-white shadow-lg p-8 rounded-lg text-center hover:shadow-2xl transition">
                        <FaClipboardCheck className="text-jmi-green text-4xl mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Verify Caretakers</h2>
                        <p className="text-gray-500 mb-6">Verify pending caretakers for approval</p>
                        <Link to="/admin/dashboard/verifycaretakers">
                            <button className="px-6 py-2 bg-jmi-green text-white rounded-lg hover:bg-jmi-hovergreen transition">
                                Go to Verification
                            </button>
                        </Link>
                    </div>

                    {/* Complaint Verification Section */}
                    <div className="bg-white shadow-lg p-8 rounded-lg text-center hover:shadow-2xl transition">
                        <FaExclamationCircle className="text-jmi-green text-4xl mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Complaint Verification</h2>
                        <p className="text-gray-500 mb-6">Review and manage complaints</p>
                        <Link to="/admin/dashboard/complaint">
                            <button className="px-6 py-2 bg-jmi-green text-white rounded-lg hover:bg-jmi-hovergreen transition">
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
