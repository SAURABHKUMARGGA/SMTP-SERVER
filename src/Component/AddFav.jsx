import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function AddFav() {
    const navigate = useNavigate()
useEffect(()=>{
    navigate(-1);
})
  return (
    <div>AddFav</div>
  )
}

export default AddFav