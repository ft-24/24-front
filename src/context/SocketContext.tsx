import { createContext, useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

type SocketContext = {
  socket: Socket | undefined;
  error: string;
};

export const SocketContext = createContext<SocketContext>({
  socket: undefined,
  error: "",
});

export const SocketContextProvider = ({ children }:{ children: JSX.Element }) => {
  const [socket, setSocket] = useState<Socket | undefined>();
  const [error, setError] = useState("");
  useEffect(() => {
    const _socket = io("http://localhost:3001");
    _socket.on("connect", () => {setSocket(_socket)});
    _socket.on("disconnect", (reason)=>{setError(reason)});
    return (() => {
      _socket?.disconnect();})
  }, []);
  return (
    <SocketContext.Provider value={{ socket: socket, error: error }}>
      {children}
    </SocketContext.Provider>
  );
};
