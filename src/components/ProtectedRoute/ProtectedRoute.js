import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({setPath, component: Component, ...props}) {
  // setPath(window.location.pathname);

  return (
      props.loggedIn ? <Component {...props}/> : <Navigate to="/sign-in" replace/>
  )

}

export default ProtectedRoute
