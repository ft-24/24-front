import { Outlet } from "react-router-dom";
import RequireAuth from "../auth/RequireAuth";
import SocketContext from "./SocketContext";
import GameHeader from "./GameHeader";
import GameFooter from "./GameFooter";

const GameLayout = () => {
  return (
    <RequireAuth>
      <>
        <SocketContext />
        <GameHeader />
        <Outlet />
        <GameFooter />
      </>
    </RequireAuth>
  );
};

export default GameLayout;
