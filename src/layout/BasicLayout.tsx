import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { SocketContextProvider } from "../context/SocketContext";

const BasicLayout = () => {
  return (
    <SocketContextProvider>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </SocketContextProvider>
  );
};

export default BasicLayout;
