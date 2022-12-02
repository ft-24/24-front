import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuthDispatch } from "../context/AuthHooks";

const Auth = () => {
  const location = useLocation();
  const dispatch = useAuthDispatch();
  const [sucess, setSucess] = useState(false);
  useEffect(()=>{
    const idx = location.search.indexOf("?token=");
    if (idx == -1) setSucess(false); 
    else {
      const token = location.search.slice(7);
      dispatch({type: "LOGIN", payload: token});
      setSucess(true);
    }
  },[]);
  if (sucess)
    return <Navigate to="/" replace={true} />;
  return <Navigate to="/login" replace={true} />;
};

export default Auth;
