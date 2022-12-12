import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "../context/AuthHooks";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuthState();
  const navigate = useNavigate();
  useEffect(()=>{
    if (token === undefined)
      navigate("/login", {replace: true});
  },[token]);
  return children;
};

export default RequireAuth;
