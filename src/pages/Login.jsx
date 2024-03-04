import React, { useState } from 'react'; // Import useState for controlled inputs 
import { useAuth } from '../context/auth.js'; // Import the useAuth hook
import { Link, Navigate } from 'react-router-dom';
import { toast } from "react-toastify";

import axios from "axios"
import "../styles/auth.css"

function Login() {
  const [auth, setAuth] = useAuth();

  const handleSubmit = async(event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const {data} = await axios.post('/login', formData);

    if (data.status==200){
      setAuth(data.user) 
      console.log(data.user);
      return <Navigate to="/"/>
    }else if(data.status=401){
      toast.error("Invalid Credential !!");
    }else{
      toast.warning("Internal Server Error!");
    }
    
  }

  if(auth.user) return <Navigate to="/" />
  return (    
    
    <div className="authContainer">
      <h2>Welcome to Our TradingApp! <span>😊</span></h2>
      <p>Please sign in to your account and start the adventure</p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email"/>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password"/>
        <button type="submit">Log in</button>
      </form>
      <p>New on our platform? <Link to={process.env.REACT_APP_URL+"/register"} className="create-account">Create an account</Link></p>
    </div>
    
  );
}

export default Login;