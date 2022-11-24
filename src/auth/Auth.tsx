import { useLocation, Navigate } from "react-router-dom";
import { useAuthDispatch } from "../context/AuthHooks";

const Auth = () => {
  const location = useLocation();
  const dispatch = useAuthDispatch();
  const idx = location.search.indexOf("?token=");
  if (idx == -1) return <Navigate to="/login" replace={true} />;
  else {
    const token = location.search.slice(7);
    localStorage.setItem("token", token);
    dispatch({type: "LOGIN", payload: token});
  }
  return <Navigate to="/" replace={true} />;
};

export default Auth;
