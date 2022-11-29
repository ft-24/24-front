import { Outlet } from "react-router-dom";
import RequireAuth from "../auth/RequireAuth";
import Header from "./header";
import Footer from "./Footer";
import SocketContext from "./SocketContext";

const OuterLayout = () => {
  return (
    <RequireAuth>
      <>
        <SocketContext />
				<Outlet />
      </>
    </RequireAuth>
  );
};

export default OuterLayout;
