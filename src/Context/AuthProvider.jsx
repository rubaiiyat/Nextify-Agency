import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
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

  const handleGoogleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const handleGithubLogin = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };
  const value = {
    user,
    signUpWithEmail,
    signInWithEmail,
    handleGoogleLogin,
    handleGithubLogin,
  };
  return (
    <authContext.Provider value={value}>
      {!loader && children}
    </authContext.Provider>
  );
};

export default AuthProvider;
