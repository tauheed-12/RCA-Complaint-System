import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:8080/auth/login', JSON.stringify(loginInfo), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.data) {
        Cookies.set('userId', response.data.userId);
        Cookies.set('token', response.data.token);
        Cookies.set('isAdmin', response.data.isAdmin);
        Cookies.set('isCareTaker', response.data.isCareTaker);
        console.log('logged in successfully', response.data);
        if (response.data.isCareTaker === true) {
          navigate(`/caretaker/${response.data.userId}`);
        } else if (response.data.isAdmin === 'true') {
          navigate(`/admin/${response.data.userId}`)
        }
        else {
          navigate(`/student/${response.data.userId}`)
        }
      }
    } catch (error) {
      console.log('error during login', error)
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-jmi-grey">
      <form className="max-w-md w-full p-6 bg-white shadow-lg rounded-md">
        <h3 className="text-2xl font-semibold mb-6 text-center">Sign In</h3>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-jmi-grey rounded-md shadow-sm focus:outline-none focus:ring-jmi-green focus:border-jmi-green sm:text-sm"
            placeholder="Enter email"
            name='email'
            value={loginInfo.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-jmi-grey rounded-md shadow-sm focus:outline-none focus:ring-jmi-green focus:border-jmi-green sm:text-sm"
            placeholder="Enter password"
            name='password'
            value={loginInfo.password}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center mb-4">
          <input
            id="rememberMe"
            type="checkbox"
            className="h-4 w-4 text-jmi-green focus:ring-jmi-green border-jmi-grey rounded"
          />
          <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div className="mb-6">
          <button type="submit"
            onClick={handleSubmit}
            className="w-full py-2 px-4 bg-jmi-green text-white font-semibold 
          rounded-md shadow-sm hover:bg-jmi-hovergreen focus:outline-none focus:ring-2 
          focus:ring-jmi-green focus:ring-offset-2">
            Submit
          </button>
        </div>

        <p className="text-sm text-gray-600 text-center">
          {/* Forgot <a href="#" className="text-jmi-green hover:text-jmi-hovergreen">password?</a> */}
        </p>
      </form>
    </div>
  );
};

export default Login;
