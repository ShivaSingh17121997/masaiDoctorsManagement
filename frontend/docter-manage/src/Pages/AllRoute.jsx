import { Routes, Route } from "react-router-dom"


import React from 'react'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

function AllRoute() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/signup" element={<Signup/>} ></Route>
        </Routes>
    </div>
  )
}

export default AllRoute