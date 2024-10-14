import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';  // backend URL

export const fetchUsers = async () => {
    const response = await axios.get(`${API_BASE_URL}/admin/users`);
    return response.data;
};

export const deleteUser = async (userId) => {
    await axios.delete(`${API_BASE_URL}/admin/users/${userId}`);
};

export const fetchComplaints = async () => {
    const response = await axios.get(`${API_BASE_URL}/admin/complaints`);
    return response.data;
};

export const deleteComplaint = async (complaintId) => {
    await axios.delete(`${API_BASE_URL}/admin/complaints/${complaintId}`);
};
