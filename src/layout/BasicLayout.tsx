import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { SocketContextProvider } from "../context/SocketContext";
import RequireAuth from "../auth/RequireAuth";

const BasicLayout = () => {
  return (
    <RequireAuth>
      <SocketContextProvider>
          <Header />
          <Outlet />
          <Footer />
      </SocketContextProvider>
    </RequireAuth>
  );
};

export default BasicLayout;
