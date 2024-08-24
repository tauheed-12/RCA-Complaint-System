import React from 'react';

function HomePage() {
    return (
        <div className="min-h-screen bg-jmi-grey flex flex-col">
            {/* Navigation Bar */}
            <header className="flex justify-between items-center p-4 bg-white shadow-md">
                <h1 className="text-2xl font-bold text-jmi-green">Hostel Complaint System</h1>
                <div className="space-x-4">
                    <a href="/student/register" className="bg-jmi-green text-white hover:bg-jmi-hovergreen px-4 py-2 rounded-md font-semibold">
                        Register
                    </a>
                    <a href="/auth/login" className="bg-jmi-green text-white hover:bg-jmi-hovergreen px-4 py-2 rounded-md font-semibold">
                        Login
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-4xl font-bold text-jmi-green mb-4">
                    Welcome to the Hostel Complaint System
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                    We are here to ensure a comfortable stay for all our students. If you are facing any issues or have concerns, please let us know by submitting a complaint. Our team is dedicated to resolving all complaints promptly.
                </p>
            </main>

            {/* Footer Section */}
            <footer className="bg-jmi-green py-4 text-center text-white">
                <p>&copy; 2024 Hostel Complaint System. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default HomePage;


