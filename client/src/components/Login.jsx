import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState("");
    const navigate = useNavigate()


    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

      // Check if fields are empty
      if (!email || !password) {
          setError("Please enter both email and password");
        return;
      }

      // Validate Email Format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          setError("Please enter a valid email address");
        return;
      }

      
      try {
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
          console.log(API_BASE_URL); //check wther loaded correctly
          
          const result = await axios.post(`${API_BASE_URL}/login`, { email, password });
          console.log("Login response",result);

          //Check if login was successful
          if (result.status === 200) {
            navigate("/home");
          } else {
            setError("Invalid email or password");
          }
            
      } catch (error) {
            console.error(error);
            
            setError("Login failed. Please try again.");
        }
    }; 


  return (
    <div className="bg-gray-950 flex justify-center items-center min-h-screen ">
      <div className="bg-gray-700 p-8 rounded-lg shadow-2xl max-w-sm w-full shadow-black">
        <h2 className="text-center text-2xl text-white font-bold mb-6 ">
          Login{" "}
        </h2>
        <form className="" onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-300 mb-2 text-sm font-medium "
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full bg-gray-800 px-3 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 mb-2 text-sm font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full bg-gray-800 px-3 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-end text-gray-300">
              <a href="#">forget password?</a>
            </div>
          </div>
          <button
            className={`my-4 py-2 text-lg w-full text-white rounded-md shadow-2xl shadow-black ${
              email && password
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-500 cursor-not-allowed"
            }`}
            type="submit"
            disabled={!email || !password}
          >
            Login
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
        <p className="text-gray-300 mt-2 text-center underline underline-offset-2">
          <Link to="/register">Don't have an account?</Link>
        </p>
      </div>
    </div>
  );
}

export default Login
