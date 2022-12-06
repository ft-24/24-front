import { createContext, useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { Url } from "../constants/Global";
import { useAuthDispatch, useAuthState } from "./AuthHooks";

type SocketContext = { socket: Socket | undefined; error: string; };

export const SocketContext = createContext<SocketContext>({ socket: undefined, error: "", });

export const SocketContextProvider = ({ children }:{ children: JSX.Element }) => {

  const [socket, setSocket] = useState<Socket | undefined>();
  const [error, setError] = useState("");
  const {token} = useAuthState();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    const _session = localStorage.getItem('session');
    const _socket = io(Url +  "24", { transports: ['websocket'], autoConnect: false, query:{token:token} });
    _socket.auth = { sessionID:_session };
    _socket.connect();
    _socket.on("connect", () => {});
    _socket.on("session", ({ sessionID }) => {
      dispatch({ type: "SESSION", payload: sessionID });
    });
    _socket.on("disconnect", (reason) => { setError(reason) });
    setSocket(_socket);
    return (() => {
      _socket?.disconnect();
    })
  }, []);
  return (<SocketContext.Provider value={{ socket: socket, error: error }}> {children} </SocketContext.Provider>);
};