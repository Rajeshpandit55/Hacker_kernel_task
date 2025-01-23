import React, { useState } from "react";
import { loginUser } from "../api/auth"; 
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      // console.log("Logging in with:", email, password);
  
      const data = await loginUser(email, password);
  
      if (data && data.token) {
        localStorage.setItem("userToken", data.token);
        toast.success("User login Successfully!", {
          onClose: () => navigate("/home"),
          autoClose: 500, 
        });
      } else {
        setError("Login failed. Please try again.");
       
      }
    } catch (err) {
      console.error("Login error:", err.message);
      setError("Login failed. Please check your credentials.");
      
    }
  };
  
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div>
            <button
             
              type="submit"
              className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
      
          </div>
        </form>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Login;
