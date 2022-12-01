import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "../context/AuthHooks";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuthState();
  if (!token) return <Navigate to="/login" replace={true} />;
  return children;
};

export default RequireAuth;
