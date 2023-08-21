
import { Routes, Route } from "react-router-dom"


import React from 'react'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import AddItem from './Add'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/signup" element={<Signup />} ></Route>
                <Route path="/login" element={<Login />} ></Route>
                <Route path="/add" element={<AddItem />} ></Route>
            </Routes>

        </div>
    )
}
