import React, {createContext, useEffect} from "react";
import { io, Socket } from 'socket.io-client';

const gsocket = io('http://10.15.3.5:3000/game', { transports: ['websocket'] });//createContext<Socket | undefined>(undefined);

const SocketContext = () => {
  useEffect(() => {
    return ()=>{
      gsocket.on("message", ()=>{});
    }
  }, []);
  return (
    <>
      {/* <gsocket.Provider value={io('http://10.15.8.4:3000/game', { transports: ['websocket'] })}>
        <GamePage />
      </gsocket.Provider> */}
    </>
  );
}

export default SocketContext;
export {gsocket};