import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../Auth/useAuth";


const PublicRoute = () => {
  const auth = useAuth();

  return !auth.isLogged() ? (
    <Outlet />
  ) : (
    <Navigate to={"/dashboard"} />
  );
};

export default PublicRoute;
