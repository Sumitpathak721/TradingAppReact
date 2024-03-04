import React from 'react'
import { useAuth } from '../context/auth'
import { Link, Navigate } from 'react-router-dom'
import { toast } from "react-toastify";

import axios from "axios"

function Register() {
  const [auth,setAuth] = useAuth()
  const handleSubmit = async(event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const {data} = await axios.post('/register', formData);

    if (data.status==200){
      toast.success("Account Created ");
      return <Navigate to="/login"/>
    }else if(data.status=401){
      toast.error("Invalid Credential!!");
    }else{
      toast.warning("Internal Server Error!");
    }
    
  }
  if(auth.user) return <Navigate to="/" />
  return (
    <div className="authContainer">
      <h2>Welcome to Our TradingApp! <span>😊</span></h2>
      <p>Please sign up to new account and start the adventure</p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name"/>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email"/>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password"/>
        <button type="submit">Register</button>
      </form>
      <p>Already have account? <Link to={process.env.REACT_APP_URL+"/login"} className="create-account">Sign In to your account</Link></p>
    </div>
  )
}

export default Register