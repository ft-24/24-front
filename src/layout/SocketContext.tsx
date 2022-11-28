import React, {createContext, useEffect} from "react";
import { io, Socket } from 'socket.io-client';
import { Url } from "../constants/global";

const gsocket = io(Url + 'game', { transports: ['websocket'] });//createContext<Socket | undefined>(undefined);

const SocketContext = () => {
  useEffect(() => {
    return ()=>{
      gsocket.on("message", ()=>{});
    }
  }, []);
  return (
    <>
      {/* <gsocket.Provider value={io(Url + 'game', { transports: ['websocket'] })}>
        <GamePage />
      </gsocket.Provider> */}
    </>
  );
}

export default SocketContext;
export {gsocket};