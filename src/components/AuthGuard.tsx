import React from "react";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import Login from "../pages/authentication/Login";

type Props = {
  children: React.ReactNode;
};

function AuthGuard({ children }: Props) {
  const auth = useAuth();
  const location = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  );

  if (!auth.isAuthenticated) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname);
    }

    return <Login />;
  }

  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}

export default AuthGuard;
