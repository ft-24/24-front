import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "../context/AuthHooks";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuthState();
  const [isAuthorized, setIsAuthorized] = useState(token!==undefined);
  useEffect(()=>{
    setIsAuthorized(token!==undefined);
  },[token]);
  if (!isAuthorized) return <Navigate to="/login" replace={true} />;
  return children;
};

export default RequireAuth;
