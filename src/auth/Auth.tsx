import { useLocation, Navigate } from "react-router-dom";

const Auth = () => {
  let location = useLocation();
  const idx = location.search.indexOf("?code=");
  if (idx == -1) return <Navigate to="/" replace={true} />;
  else {
    const code = location.search.slice(6);
    localStorage.setItem("code", code);
  }
  return <Navigate to="/home" replace={true} />;
};

export default Auth;
