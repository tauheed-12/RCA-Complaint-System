import React from 'react';

const Login = () => {
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
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-jmi-grey rounded-md shadow-sm focus:outline-none focus:ring-jmi-green focus:border-jmi-green sm:text-sm"
            placeholder="Enter password"
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
          <button type="submit" className="w-full py-2 px-4 bg-jmi-green text-white font-semibold rounded-md shadow-sm hover:bg-jmi-hovergreen focus:outline-none focus:ring-2 focus:ring-jmi-green focus:ring-offset-2">
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
