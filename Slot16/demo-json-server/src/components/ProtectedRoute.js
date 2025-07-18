import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading session...</div>;

  if (!user) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
