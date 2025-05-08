import React from "react";
import { useAuth } from "../Context/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
