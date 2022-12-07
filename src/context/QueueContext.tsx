import { createContext, useReducer, Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import { GameRoomInfo } from "../pages/lobby/components/GameRoomInfo"

type QueueContextType = {
    queue_state: "INQUEUE" | "NONE" | "MATCHED" | "INGAME" | "PUT_ID" | "ENTER_ROOM" ,
    room: GameRoomInfo | undefined,
    id: string | undefined,
}

const INITIAL_STATE: QueueContextType = {
    queue_state: "NONE",
    room: undefined,
    id: undefined,
}

export type QueueActionType =
    | { type: "INQUEUE" }
    | { type: "MATCHED" }
    | { type: "ENTER_ROOM", roominfo: GameRoomInfo }
    | { type: "NONE" }
    | { type: "INGAME" }
    | { type: "PUT_ID", payload: string}

export const QueueStateContext = createContext<QueueContextType>(INITIAL_STATE);
export const QueueDispatchContext = createContext<Dispatch<QueueActionType> | null>(null);

const queueReducer = (state: QueueContextType, action: QueueActionType): QueueContextType => {
    switch (action.type) {
        case "INQUEUE": {
            return ({ ...state, queue_state: "INQUEUE" });
        }
        case "MATCHED": {
            return ({ ...state});
        }
        case "ENTER_ROOM": {
            const _room = action.roominfo;
            return ({
                room: {
                    id: _room.id, name: _room.name, access_modifier: _room.access_modifier,
                    player_list: [..._room.player_list], spectator_list: [..._room.spectator_list]
                }, queue_state: "ENTER_ROOM", id: _room.id,
            });
        }
        case "PUT_ID" : {
            const _id = action.payload;
            return ({
                ...state, queue_state:"ENTER_ROOM", id:_id
            });
        }
        case "NONE": {
            return ({ queue_state: "NONE", room: undefined, id:undefined });
        }
        case "INGAME": {
            return ({ ...state, queue_state: "INGAME" });
        }
    }
}

export const QueueContextProvider = ({ children }: { children: JSX.Element[] }) => {
    const [state, dispatch] = useReducer(queueReducer, INITIAL_STATE);

    return (
        <QueueStateContext.Provider value={state}>
            <QueueDispatchContext.Provider value={dispatch}>
                {children}
            </QueueDispatchContext.Provider>
        </QueueStateContext.Provider>
    )
}