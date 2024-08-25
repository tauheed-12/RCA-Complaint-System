import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function FeedbackFormModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleRatingClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg">
        <h2 className="text-desktop-heading font-bold mb-4 font-ginto text-jmi-green">Feedback Form</h2>
        <form>
          <div className="mb-4">
            <label className="block text-desktop-label font-semibold mb-2">
              Rate your RCA hostel experience
            </label>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => handleRatingClick(index)}
                  className={`text-2xl ${rating > index ? 'text-jmi-green' : 'text-gray-300'}`}
                >
                  <FaStar />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-desktop-label font-semibold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-desktop-body font-ginto text-gray-800 focus:outline-none focus:ring-2 focus:ring-jmi-green"
              placeholder="Describe your experience"
              rows="4"
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-300 text-gray-700 font-ginto font-semibold hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-jmi-green text-white font-ginto font-semibold hover:bg-jmi-hovergreen"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FeedbackFormModal;
