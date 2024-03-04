import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
  });

  const resetAuth = (auth)=>{
    setAuth(auth)
    axios.defaults.headers.common['Authorization'] = auth;
    localStorage.setItem("auth",JSON.stringify(auth))
    return <Navigate to="/" />
  }

  

  useEffect(() => {
    try{
      const data = localStorage.getItem("auth");
      if (data) {
        const parseData = JSON.parse(data);
        setAuth({
          ...auth,
          user: parseData.user,
        });
        //default axios
        axios.defaults.headers.common['Authorization'] = auth;
      }
    }catch(e){
      console.log("Error in AuthContext",e);
    }
    //eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, resetAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };