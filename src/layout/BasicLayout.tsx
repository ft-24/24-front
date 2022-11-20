import { Outlet } from "react-router-dom";
import RequireAuth from "../auth/RequireAuth";
import Header from "./header";
import Footer from "./Footer";

const BasicLayout = () => {
  return (
    <RequireAuth>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </RequireAuth>
  );
};

export default BasicLayout;
