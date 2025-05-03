import React, { use } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location);
  console.log(user?.email);
  if (loading) {
    return <h1>loading...</h1>;
  }

  if (!user && !user?.email) {
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
