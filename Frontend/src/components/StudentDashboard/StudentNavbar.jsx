import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ComplaintFormModal from '../StudentDashboard/Complaint';
import FeedbackFormModal from '../StudentDashboard/FeedBack';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openComplaintModal = () => {
    setIsComplaintModalOpen(true);
  };

  const closeComplaintModal = () => {
    setIsComplaintModalOpen(false);
  };

  const openFeedbackModal = () => {
    setIsFeedbackModalOpen(true);
  };

  const closeFeedbackModal = () => {
    setIsFeedbackModalOpen(false);
  };

  return (
    <div>
      <header className="bg-white py-4 px-6 shadow-lg flex justify-between items-center z-50 relative overflow-hidden">
  <style jsx>{`
    header {
      box-shadow: 0 4px 10px rgba(0, 128, 0, 0.7);
    }
  `}</style>
        <h1 className=" md:text-2xl font-semibold text-gray-800 font-ginto-nord">Student Dashboard</h1>
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-gray-700 focus:outline-none">
            {isSidebarOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        <nav className="hidden md:flex space-x-4">
          <button className="px-4 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-jmi-grey font-ginto font-semibold">
            Dashboard
          </button>
          <button className="px-4 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-jmi-grey font-ginto font-semibold">
            Check Status
          </button>
          <button
            className="px-4 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-jmi-grey font-ginto font-semibold"
            onClick={openFeedbackModal}
          >
            Feedback
          </button>
          <button
            className="px-4 py-2 rounded-md bg-jmi-green text-white hover:bg-jmi-hovergreen font-ginto font-semibold"
            onClick={openComplaintModal}
          >
            File complaint
          </button>
        </nav>
      </header>

      <div
        className={`z-50 fixed top-0 right-0 h-full w-64 bg-white shadow-md transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-bold text-gray-800">Menu</h2>
          <button onClick={toggleSidebar} className="text-gray-700 focus:outline-none">
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 px-4">
          <button className="px-4 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-jmi-grey font-ginto font-semibold">
            Dashboard
          </button>
          <button className="px-4 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-jmi-grey font-ginto font-semibold">
            Check Status
          </button>
          <button
            className="px-4 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-jmi-grey font-ginto font-semibold"
            onClick={openFeedbackModal}
          >
            Feedback
          </button>
          <button
            className="px-4 py-2 rounded-md bg-jmi-green text-white hover:bg-jmi-hovergreen font-ginto font-semibold"
            onClick={() => {
              toggleSidebar();
              openComplaintModal();
            }}
          >
            File complaint
          </button>
        </nav>
      </div>

      <ComplaintFormModal isOpen={isComplaintModalOpen} onClose={closeComplaintModal} />

      <FeedbackFormModal isOpen={isFeedbackModalOpen} onClose={closeFeedbackModal} />
    </div>
  );
}

export default Navbar;
