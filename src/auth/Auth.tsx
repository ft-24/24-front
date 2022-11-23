import { useLocation, Navigate } from "react-router-dom";

const Auth = () => {
  let location = useLocation();
  const idx = location.search.indexOf("?token=");
  if (idx == -1) return <Navigate to="/login" replace={true} />;
  else {
    const token = location.search.slice(7);
    localStorage.setItem("token", token);
  }
  return <Navigate to="/home" replace={true} />;
};

export default Auth;
