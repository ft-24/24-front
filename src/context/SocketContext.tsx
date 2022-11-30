import { createContext, useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

type SocketContext = {
  socket: Socket | undefined;
  id: string;
  error: string;
};

export const SocketContext = createContext<SocketContext>({
  socket: undefined,
  id: "",
  error: "",
});

export const SocketContextProvider = ({ children }:{ children: JSX.Element }) => {
  const [socket, setSocket] = useState<Socket | undefined>();
  const [id, setSocketId] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const _socket = io("http://localhost:3001");
    setSocket(_socket);
    _socket.on("connect", () => {setSocketId(_socket.id)});
    _socket.on("error", (error)=>{setError(error)});
    _socket.on("disconnect", (reason)=>{setError(reason)});
    return (() => {
      _socket.disconnect();
    })
  }, []);
  return (
    <SocketContext.Provider value={{ socket: socket, id: id, error: error }}>
      {children}
    </SocketContext.Provider>
  );
};
