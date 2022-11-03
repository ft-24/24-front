import { Navigate } from "react-router-dom";

const RequireAuth = ({children} : {children : JSX.Element}) => {
  if (!localStorage.getItem('code'))
      return  <Navigate to="/" replace={true} />
  return children;
};

export default RequireAuth;
