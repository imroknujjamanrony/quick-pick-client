import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase_init";

const AuthProvider = ({ children }) => {

  const [user , setUser] = useState(null)
  const [loading , setLoading] = useState(true)

  const createUser = (email , password)=> {
    setLoading(true)
   return createUserWithEmailAndPassword(auth , email , password)
  }

  const signInUser = (email , password)=> {
        setLoading(true)

return signInWithEmailAndPassword(auth , email , password)
  }

  const logout = () => {
    setLoading(true)
    return signOut(auth)
  }

useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth , currentUser => {
    console.log('current user',currentUser);
    setUser(currentUser)
    setLoading(false)
    
  })
  return () =>{
    unSubscribe();
  }
}, [])

  const userInfo = {
user , 
loading,
createUser,
signInUser,
logout
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
