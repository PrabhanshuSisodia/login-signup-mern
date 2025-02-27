// import { useState } from "react"
import Login from "./components/Login";
import Signup from "./components/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter >
          <Routes >
        <Route path='/register' element={<Signup />} />
        <Route path="/login" element={ <Login />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
