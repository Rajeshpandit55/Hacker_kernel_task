import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const userToken = localStorage.getItem("userToken");

  // If user is not authenticated, redirect to login
  if (!userToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;



