import React, { useState } from 'react'; // Import useState for controlled inputs 
import { useAuth } from '../context/auth'; // Import the useAuth hook
import { Navigate } from 'react-router-dom';

function Login() {
  const [auth, setAuth] = useAuth();
  // Declare state variables for username and token
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');

  const handleSubmitEvent = (e) => {
    e.preventDefault();

    // Access form values using state variables
    if (username !== "" && token !== "") {
      const data = { user: { name: username }, token }
      setAuth(data); // Update state
      return;
    }

    alert("Please provide a valid username and token");
  };

  if(auth.user) return <Navigate to="/" />
  return (    
    <form onSubmit={handleSubmitEvent}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username} // Set initial and updated values
        onChange={(e) => setUsername(e.target.value)} // Handle input changes
      />
      <input
        name="token"
        placeholder="Token"
        value={token} // Set initial and updated values
        onChange={(e) => setToken(e.target.value)} // Handle input changes
      />
      <button type="submit">Login</button>
    </form>

  );
}

export default Login;