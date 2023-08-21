import React from 'react'
import { Link  } from "react-router-dom"

function Navbar() {
  return (
    <div style={{display:"flex", justifyContent:"space-around", backgroundColor:"yellow", height:"50px", fontWeight:"bold"}} >
        <Link to="/" >Home</Link>
        <Link to="/login" >Login</Link>
        <Link to="/signup" >Signup</Link>
    </div>
  )
}

export default Navbar