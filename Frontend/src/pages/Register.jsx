import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    hostel: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterInfo({
      ...registerInfo,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post('http://localhost:8080/auth/register', JSON.stringify(registerInfo), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      alert("Registration successful! Please verify your email.");
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
      alert("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-jmi-grey">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h3 className="text-jmi-green text-2xl font-bold mb-6 text-center">Sign Up</h3>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium" aria-label="Name">Name</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-jmi-grey rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-jmi-green"
            placeholder="Name"
            name="name"
            value={registerInfo.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium" aria-label="Email address">Email address</label>
          <input
            type="email"
            className="mt-1 block w-full px-4 py-2 border border-jmi-grey rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-jmi-green"
            placeholder="Enter email"
            name="email"
            value={registerInfo.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium" aria-label="Hostel">Hostel</label>
          <select
            className="mt-1 block w-full px-4 py-2 border border-jmi-grey rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-jmi-green"
            name="hostel"
            value={registerInfo.hostel}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select your hostel</option>
            <option value="HostelA">HostelA</option>
            <option value="HostelB">HostelB</option>
            <option value="HostelC">HostelC</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium" aria-label="Password">Password</label>
          <input
            type="password"
            className="mt-1 block w-full px-4 py-2 border border-jmi-grey rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-jmi-green"
            placeholder="Enter password"
            name="password"
            value={registerInfo.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-jmi-green text-white font-semibold rounded-md shadow-sm hover:bg-jmi-hovergreen focus:outline-none focus:ring-2 focus:ring-jmi-green focus:ring-offset-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
