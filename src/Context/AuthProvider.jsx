import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth/cordova";
import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import app from "../Firebase/Firebase.config";

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);
  const auth = getAuth(app);

  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const value = { user, signUpWithEmail, signInWithEmail };
  return (
    <authContext.Provider value={value}>
      {!loader && children}
    </authContext.Provider>
  );
};

export default AuthProvider;
