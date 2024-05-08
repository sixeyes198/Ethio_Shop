import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserAlt, FaLock, FaEnvelope, FaUser } from "react-icons/fa";

function Register({ onClose }) {
  // Form state for each input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      user_name: username,
      password,
      first_name: firstName,
      last_name: lastName,
      email,
    };

    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      // Registration successful
      console.log(data.message); // Output the server message
      console.log("You are registered");
      onClose(); // Close the form
    } else {
      // Handle error response
      console.log(data.message); // Output error message
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div
        className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Register
        </h1>
        <form onSubmit={handleSubmit}>
          {/* First Name input */}
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
            <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {/* Last Name input */}
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
            <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {/* Email input */}
          <div className="mb-4 relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
            <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {/* Username input */}
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
            <FaUserAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {/* Password input */}
          <div className="mb-4 relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
            />
            <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
