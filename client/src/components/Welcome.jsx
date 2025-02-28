import React from 'react'
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="relative h-screen  flex flex-col justify-center items-center bg-[url('https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center md:bg-[url('https://t3.ftcdn.net/jpg/02/79/75/74/360_F_279757406_PjHAMPHNAEyf5NvyEYlC7mJNRKHHkmCz.jpg')]">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center">
        <div className="mb-3 bg-yellow-400 text-gray-700 text-2xl md:text-3xl lg:text-4xl shadow shadow-md shadow-black py-3 px-6 md:px-10 rounded-lg">
          Welcome to our Website
        </div>

        <div className="text-white flex flex-col text-lg md:text-xl space-y-4">
          <Link
            to="/login"
            className="my-2 bg-red-600 py-2 px-8 md:px-10 rounded-lg shadow shadow-xxl shadow-black hover:bg-red-800 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="my-2 bg-green-600 py-2 px-8 md:px-10 rounded-lg shadow shadow-xxl shadow-black hover:bg-green-800 transition duration-300"
          >
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome
