import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="bg-gray-950 flex justify-center items-center min-h-screen ">
      <div class="bg-gray-700 p-8 rounded-lg shadow-2xl max-w-sm w-full shadow-black">
        <h2 class="text-center text-2xl text-white font-bold mb-6 ">Login </h2>
        <form class="">
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
            class="my-4 py-2 text-lg  bg-blue-600 w-full text-white rounded-md shadow-2xl shadow-black hover:bg-blue-700"
            type="submit"
          >
            Login
          </button>
        </form>
        <p class="text-gray-300 mt-2 text-center underline underline-offset-2">
          <Link to="/register">Don't have an account?</Link>
        </p>
      </div>
    </div>
  );
}

export default Login
