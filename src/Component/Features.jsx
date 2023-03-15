import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom'

function Features() {
  const navigate= useNavigate();
  return (
    <>
    <div>Features</div>
    <button onClick={()=>{navigate("s")}}>Clcik me</button>
    <Outlet/>
    </>
  )
}

export default Features