import { useState ,useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({children} : {children : JSX.Element}) => {
  const [isAuthorized, setIsAuthorized] = useState(true);
  const location = useLocation();
  useEffect(()=>{
    console.log("changed location");
    if (!localStorage.getItem('token'))
      setIsAuthorized(false);
  },[location]);
  return isAuthorized ? children : <Navigate to="/login" replace={true} />
};

export default RequireAuth;
