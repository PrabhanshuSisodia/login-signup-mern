// import React, { useState } from 'react'
import { Link } from "react-router-dom";
function Signup() {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  return (
    <div className="bg-gray-950 flex justify-center items-center min-h-screen ">
      <div class="bg-gray-700 p-8 rounded-lg shadow-2xl max-w-sm w-full shadow-black">
        <h2 class="text-center text-2xl text-white font-bold mb-6 ">Signup </h2>
        <form class="">
          <div class="mb-4">
            <label
              class="block text-gray-300 mb-2 text-sm font-medium "
              for="name"
            >
              Name
            </label>
            <input
              class="w-full bg-gray-800 px-3 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
              type="text"
              name="input"
              id=""
              placeholder="Name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-300 mb-2 text-sm font-medium "
              for="email"
            >
              Email
            </label>
            <input
              class="w-full bg-gray-800 px-3 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
              type="text"
              name="input"
              id=""
              placeholder="Email"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-300 mb-2 text-sm font-medium "
              for="mobile-number"
            >
              Mobile Number
            </label>
            <input
              class="w-full bg-gray-800 px-3 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
              type="number"
              name="input"
              id=""
              placeholder="Mobile No."
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-300 mb-2 text-sm font-medium"
              for="password"
            >
              Password
            </label>
            <input
              class="w-full bg-gray-800 px-3 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
            <div class="flex justify-end text-gray-300">
              <a href="#">forget password?</a>
            </div>
          </div>
          <button
            class="my-2 py-2 text-md  bg-blue-600 w-full text-white rounded-md shadow-2xl shadow-black hover:bg-blue-700"
            type="submit"
          >
            Register
          </button>
        <p class="text-gray-300 mt-2 mb-2 text-center ">Already Have an Account</p>
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
