import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
const AppContainer = () => {
  const { user, isLoading } = useAuth();
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : user ? (
        <Outlet />
      ) : (
        <Navigate
          to="/login"
          replace
          state={{ redirectUrl: window.location.pathname }}
        />
      )}
    </div>
  );
};

export default AppContainer;
