import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { SocketContextProvider } from "../context/SocketContext";
import RequireAuth from "../auth/RequireAuth";
import { QueueContextProvider } from "../context/QueueContext";

const BasicLayout = () => {
  return (
    <RequireAuth>
      <SocketContextProvider>
        <QueueContextProvider>
          <Header />
          <Outlet />
          <Footer />
        </QueueContextProvider>
      </SocketContextProvider>
    </RequireAuth>
  );
};

export default BasicLayout;
