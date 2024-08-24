
// import React, { Component } from 'react';

// export default class SignUp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       hostel: '',
//       roomNumber: '',
//       password: '',
//       role: '',
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission, e.g., send data to server
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-jmi-grey">
//         <form onSubmit={this.handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
//           <h3 className="text-jmi-green text-2xl font-bold mb-4">Sign Up</h3>

//           <div className="mb-3">
//             <label className="block text-gray-700">Name</label>
//             <input
//               type="text"
//               className="form-control w-full px-3 py-2 border rounded"
//               placeholder="Name"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="block text-gray-700">Email address</label>
//             <input
//               type="email"
//               className="form-control w-full px-3 py-2 border rounded"
//               placeholder="Enter email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="block text-gray-700">Hostel</label>
//             <select
//               className="form-control w-full px-3 py-2 border rounded"
//               name="hostel"
//               value={this.state.hostel}
//               onChange={this.handleChange}
//               required
//             >
//               <option value="" disabled>
//                 Select your hostel
//               </option>
//               <option value="HostelA">HostelA</option>
//               <option value="HostelB">HostelB</option>
//               <option value="HostelC">HostelC</option>
//             </select>
//           </div>

//           <div className="mb-3">
//             <label className="block text-gray-700">Room Number</label>
//             <input
//               type="text"
//               className="form-control w-full px-3 py-2 border rounded"
//               placeholder="Room Number"
//               name="roomNumber"
//               value={this.state.roomNumber}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="mb-3">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               className="form-control w-full px-3 py-2 border rounded"
//               placeholder="Enter password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="block text-gray-700">Role</label>
//             <select
//               className="form-control w-full px-3 py-2 border rounded"
//               name="role"
//               value={this.state.role}
//               onChange={this.handleChange}
//               required
//             >
//               <option value="" disabled>
//                 Select your role
//               </option>
//               <option value="Student">Student</option>
//               <option value="Caretaker">Caretaker</option>
//               <option value="Admin">Admin</option>
//             </select>
//           </div>

//           <div className="mt-4">
//             <button type="submit" className="bg-jmi-green text-white px-4 py-2 rounded w-full">
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
import React, { Component } from 'react';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      hostel: '',
      roomNumber: '',
      password: '',
      role: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(this.state);
  };

  render() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-jmi-grey">
        <form onSubmit={this.handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h3 className="text-jmi-green text-2xl font-bold mb-6 text-center">Sign Up</h3>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium">Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-jmi-grey rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-jmi-green"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium">Email address</label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-jmi-grey rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-jmi-green"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium">Hostel</label>
            <select
              className="mt-1 block w-full px-4 py-2 border border-jmi-grey rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-jmi-green"
              name="hostel"
              value={this.state.hostel}
              onChange={this.handleChange}
              required
            >
              <option value="" disabled>Select your hostel</option>
              <option value="HostelA">HostelA</option>
              <option value="HostelB">HostelB</option>
              <option value="HostelC">HostelC</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium">Room Number</label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-jmi-grey rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-jmi-green"
              placeholder="Room Number"
              name="roomNumber"
              value={this.state.roomNumber}
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium">Password</label>
            <input
              type="password"
              className="mt-1 block w-full px-4 py-2 border border-jmi-grey rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-jmi-green"
              placeholder="Enter password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium">Role</label>
            <select
              className="mt-1 block w-full px-4 py-2 border border-jmi-grey rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-jmi-green"
              name="role"
              value={this.state.role}
              onChange={this.handleChange}
              required
            >
              <option value="" disabled>Select your role</option>
              <option value="Student">Student</option>
              <option value="Caretaker">Caretaker</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-jmi-green text-white font-semibold rounded-md shadow-sm hover:bg-jmi-hovergreen focus:outline-none focus:ring-2 focus:ring-jmi-green focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}
