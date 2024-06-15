import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // eslint-disable-next-line eqeqeq
  if (user == null || user == undefined) <Navigate to="/login" />;

  return children;
}

export default ProtectedRoute;
