import React from 'react'
import Component from '../Components/Registration'
import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const handleSubmit=()=>{
    navigate('/login')
  }

  return (
    <>
    <Component />
   <Button onClick={handleSubmit}>Login</Button>
    </>
  )
}

export default Registration