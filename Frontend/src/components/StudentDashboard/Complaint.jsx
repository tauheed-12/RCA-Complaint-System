import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function ComplaintFormModal({ isOpen, onClose }) {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { userId, token, setRefresh } = useAuth();

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages(selectedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('title', title);
    formData.append('description', description);
    images.forEach((image) => formData.append('images', image));

    setIsSubmitting(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:8080/student/addComplaint', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      setRefresh(prev => prev + 1);
      onClose();
    } catch (error) {
      setError('Failed to submit complaint. Please try again.');
      console.log("Error during adding complaint", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-lg">
        <h2 className="text-desktop-heading font-bold mb-4 font-ginto text-jmi-green">File Complaint</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-desktop-body font-sans font-semibold mb-2" htmlFor="title">
              Title*
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-4 py-2 border rounded-md text-desktop-body font-ginto text-gray-800 focus:outline-none focus:ring-2 focus:ring-jmi-green"
              placeholder="Enter complaint title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-desktop-body font-sans font-semibold mb-2" htmlFor="description">
              Description*
            </label>
            <textarea
              id="description"
              className="w-full px-4 py-2 border rounded-md text-desktop-body font-ginto text-gray-800 focus:outline-none focus:ring-2 focus:ring-jmi-green"
              placeholder="Describe your complaint"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-desktop-body font-sans font-semibold mb-2" htmlFor="images">
              Upload Images
            </label>
            <input
              type="file"
              id="images"
              className="w-full px-4 py-2 border rounded-md text-desktop-body font-ginto text-gray-800 focus:outline-none focus:ring-2 focus:ring-jmi-green"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              aria-label="Upload images"
            />
          </div>

          {images.length > 0 && (
            <div className="mb-6">
              <div className="grid grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index + 1}`}
                      className="object-cover h-24 w-full rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-jmi-grey text-gray-700 font-ginto font-semibold hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-jmi-green text-white font-ginto font-semibold hover:bg-jmi-hovergreen"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ComplaintFormModal;
