import { useContext } from "react";
import { SocketContext } from "./SocketContext";

const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export default useSocket;
