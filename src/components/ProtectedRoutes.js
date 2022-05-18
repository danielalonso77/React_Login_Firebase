import React  from 'react';

import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";


export function ProtectedRoutes({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}
