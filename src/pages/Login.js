import Component from '../Components/Login'

import Registration from '../Components/Registration'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = () =>{
    navigate('/')

  }

  return (
    <>
    <Component/>
    
    <button onClick={handleSubmit}>Back to Registration page</button>
    <br></br>
    <Link to="/forgotPassword"> Back to forgotPassword page</Link>
    </>
  )
}

export default Login