import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

function ListOfCaretakers() {
    const { token } = useAuth();
    const [caretakers, setCaretakers] = useState([]);
    const [newCaretaker, setNewCaretaker] = useState({ name: '', hostel: 'HostelA', contact: '', password: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        const getCareTakerData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/admin/getUsers', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response.data);
                setCaretakers(response.data);
            } catch (error) {
                console.error("Error fetching caretakers", error);
                setError('Failed to fetch caretakers');
            }
        };
        getCareTakerData();
    }, [token]);

    const deleteCaretaker = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this caretaker?");
        if (!confirmDelete) return;

        try {
            const response = await axios.get('http://localhost:8080/admin/deleteUser', {
                params: { id },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCaretakers(caretakers.filter(caretaker => caretaker._id !== id));
            console.log(response.data);
        } catch (error) {
            console.log("Error during deleting caretaker", error);
            setError("Error deleting caretaker");
        }
    };

    const addCaretaker = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:8080/admin/addCareTaker', newCaretaker, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setCaretakers([...caretakers, response.data]);
            setNewCaretaker({ name: '', hostel: 'HostelA', contact: '', password: '' });
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;

                if (status === 400 || status === 409) {
                    setError(data.message);
                } else {
                    setError('Server error. Please try again later.');
                }
            } else {
                setError('Network error. Please check your connection.');
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCaretaker({ ...newCaretaker, [name]: value });
    };

    return (
        <div className="px-28 py-12">
            <h1 className="text-2xl font-bold mb-6">List of Caretakers</h1>
            {error && <div className="text-red-500 mb-4">{error}</div>}

            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Hostel Name</th>
                        <th className="py-2 px-4 border-b">Contact</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {caretakers.map(caretaker => (
                        <tr key={caretaker._id}>
                            <td className="py-2 px-4 border-b">{caretaker.name}</td>
                            <td className="py-2 px-4 border-b">{caretaker.hostel}</td>
                            <td className="py-2 px-4 border-b">{caretaker.email}</td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    className="bg-red-500 text-white px-4 py-1 rounded"
                                    onClick={() => deleteCaretaker(caretaker._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 className="text-xl font-bold mt-8 mb-4">Add New Caretaker</h2>
            <form onSubmit={addCaretaker} className="flex flex-col gap-4">
                <input
                    className="p-2 border border-gray-300 rounded"
                    type="text"
                    name="name"
                    placeholder="Caretaker Name"
                    value={newCaretaker.name}
                    onChange={handleInputChange}
                    required
                />
                <select
                    className="p-2 border border-gray-300 rounded"
                    name="hostel"
                    value={newCaretaker.hostel}
                    onChange={handleInputChange}
                    required
                >
                    <option value="HostelA">HostelA</option>
                    <option value="HostelB">HostelB</option>
                    <option value="HostelC">HostelC</option>
                </select>

                <input
                    className="p-2 border border-gray-300 rounded"
                    type="email"
                    name="contact"
                    placeholder="Contact Email"
                    value={newCaretaker.contact}
                    onChange={handleInputChange}
                    required
                />

                <input
                    className="p-2 border border-gray-300 rounded"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={newCaretaker.password}
                    onChange={handleInputChange}
                    required
                />

                <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    type="submit"
                >
                    Add Caretaker
                </button>
            </form>
        </div>
    );
}

export default ListOfCaretakers;
