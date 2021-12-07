import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

type Props = {
  children: React.ReactNode;
};

function GuestGuard({ children }: Props) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={"/"} replace />;
  }

  return <>{children}</>;
}

export default GuestGuard;
