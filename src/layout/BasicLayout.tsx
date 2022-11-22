import { Outlet } from "react-router-dom";
import RequireAuth from "../auth/RequireAuth";
import Header from "./header";
import Footer from "./Footer";
import SocketContext from "./SocketContext";

const BasicLayout = () => {
  return (
    <RequireAuth>
      <>
        <SocketContext />
        <Header />
        <Outlet />
        <Footer />
      </>
    </RequireAuth>
  );
};

export default BasicLayout;
