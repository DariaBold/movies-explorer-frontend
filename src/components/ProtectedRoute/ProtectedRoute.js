import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  isCheck,
  element: Component,
  ...props
}) {
  return !isCheck ? <Component {...props} /> : <Navigate to="/" replace />;
}
