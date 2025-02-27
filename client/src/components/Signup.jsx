import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [mobileNum, setMobileNum] = useState()
    const [password, setPassword] = useState()
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    const validateInput = () => {
      let tempErrors = {};

      if (!name) tempErrors.name = "Name is required";
      if (!email) tempErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(email))
        tempErrors.email = "Invalid email format";

        if (!mobileNum) {
          tempErrors.mobileNum = "Mobile number is required";
        } else if (!/^\d{10}$/.test(mobileNum)) {
          tempErrors.mobileNum = "Invalid mobile number (10 digits required)";
        }

      if (!password) tempErrors.password = "Password is required";
      else if (password.length < 6)
        tempErrors.password = "Password must be at least 6 characters";

      setErrors(tempErrors);
      return Object.keys(tempErrors).length === 0; // Return true if no errors
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateInput()) return;  //prevent submission if validation failed
        if (!name && !email && !mobileNum && !password) return;  //prevent empty submission

        try {
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
            console.log(API_BASE_URL);  //check wther loaded correctly
            
            const result = await axios.post(`${API_BASE_URL}/register`, {
              name,
              email,
              mobileNum,
              password,
            });

            console.log(result);
            navigate("/login");
        } catch (error) {
          console.error("Signup Error:", error);
          setErrors((prev) => ({
            ...prev,
            server: "Signup failed. Try again later.",
          })); // Show server error
        }
        
    }


  return (
    <div className="bg-gray-950 flex justify-center items-center min-h-screen ">
      <div className="bg-gray-700 p-8 rounded-lg shadow-2xl max-w-sm w-full shadow-black">
        <h2 className="text-center text-2xl text-white font-bold mb-6 ">
          Signup{" "}
        </h2>
        <form className="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-300 mb-2 text-sm font-medium "
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full bg-gray-800 px-3 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
              type="text"
              autoComplete="off"
              name="name"
              id="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
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
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 mb-2 text-sm font-medium "
              htmlFor="mobile-number"
            >
              Mobile Number
            </label>
            <input
              className="w-full bg-gray-800 px-3 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
              type="number"
              name="mobileNum"
              id="mobile"
              placeholder="Mobile No."
              onChange={(e) => setMobileNum(e.target.value)}
            />
            {errors.mobileNum && (
              <p className="text-red-500 text-sm">{errors.mobileNum}</p>
            )}
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
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
            <div className="flex justify-end text-gray-300">
              <a href="#">forget password?</a>
            </div>
          </div>
          <button
            className="my-2 py-2 text-md  bg-blue-600 w-full text-white rounded-md shadow-2xl shadow-black hover:bg-blue-700"
            type="submit"
          >
            Register
          </button>
          <p className="text-gray-300 mt-2 mb-2 text-center ">
            Already Have an Account
          </p>
        </form>
        <Link
          to="/login"
          className="px-32 mx-3 py-1 text-md  bg-green-600 w-full text-white rounded-md shadow-2xl shadow-black hover:bg-green-700"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
