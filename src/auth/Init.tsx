import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthDispatch } from "../context/AuthHooks";
import { flushSync } from "react-dom";

const Init = () => {
  const dispatch = useAuthDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const idx = location.search.indexOf("?token=");
    if (idx >= 0) {
      const token = location.search.slice(7);
      flushSync(() => dispatch({ type: "LOGIN", payload: token }));
      flushSync(() => navigate("/profile"), { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, []);

  return <></>;
};

export default Init;
