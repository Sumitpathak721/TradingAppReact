import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  const resetAuth = (auth)=>{
    setAuth(auth)
    localStorage.setItem("auth",JSON.stringify(auth))
    return <Navigate to="/" />
  }

  //default axios

  useEffect(() => {
    try{
      const data = localStorage.getItem("auth");
      if (data) {
        const parseData = JSON.parse(data);
        setAuth({
          ...auth,
          user: parseData.user,
          token: parseData.token,
        });
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