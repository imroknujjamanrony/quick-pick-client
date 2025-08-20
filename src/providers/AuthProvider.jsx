import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase_init.js";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState("");
  const [userEmail, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const createUser = (email, password) => {
    console.log("from provider", email, password);
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logout,
    setUserId,
    userId,
    setUsername,
    username,
    userEmail,
    setEmail,
    setRole,
    role
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
