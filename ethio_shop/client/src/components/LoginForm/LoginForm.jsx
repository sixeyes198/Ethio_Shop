import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserAlt, FaLock } from "react-icons/fa";
import LoginSuccessNotification from "./LoginSuccessNotification";

function LoginForm({ onClose, onSwitchToRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://ethio-shop.onrender.com:10000/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      // Login successful, handle the response
      console.log(data.message); // Output: You are logged in
      setShowNotification(true);
      onClose();
    } else {
      // Handle error response
      console.log(data.message); // Output error message
    }
  };

  return (
    <>
      {/* loggin in notification not working  */}
      {showNotification && (
        <LoginSuccessNotification onClose={() => setShowNotification(true)} />
      )}
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
            Login
          </h1>
          <form onSubmit={handleSubmit}>
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
            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </button>
            <div className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-blue-500 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  onSwitchToRegister();
                }}
              >
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
