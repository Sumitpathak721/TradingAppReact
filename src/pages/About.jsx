import React from 'react'
import "../styles/about.css"


function AboutPage() {
  return (
    
      <div className="container">
          <h2>Welcome to Our TradingApp! <span>👋🏻</span></h2>
          <p>Please sign in to your account and start the adventure</p>
          <form className="login-form">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email"/>
              <label for="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password"/>
              <a href="#" className="forgot-password">Forgot Password?</a>
              <button type="submit" className="login-button">Sign in</button>
          </form>
          <p>New on our platform? <a href="#" className="create-account">Create an account</a></p>
      </div>
  )
}

export default AboutPage