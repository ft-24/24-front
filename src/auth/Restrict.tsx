import { Navigate } from "react-router-dom";
import { useAuthState } from "../context/AuthHooks";

const Restrict = ({ children }: any) => {
  const { token } = useAuthState();
  console.log(token);
  if (token) return <Navigate to="/" replace={true} />;
  return <>{children}</>;
};

export default Restrict;
