import Component from '../Components/ForgotPassword'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const handleSubmit = () =>{
    navigate('/')

  }
  return (
    <>
     <Component/>  
     <button onClick={handleSubmit}>Login</button>
    </>
  )
}

export default ForgotPassword