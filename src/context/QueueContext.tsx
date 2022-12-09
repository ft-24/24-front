import { createContext, useReducer, Dispatch } from "react";
import { GameRoomInfo } from "../pages/lobby/components/GameRoomInfo"

type QueueContextType = {
    queue_state: "INQUEUE" | "ENTER" | "GETQUEUE" | "UPDATE" | "NONE",
    room_info: GameRoomInfo | undefined,
    room_id: string | undefined,
}

const INITIAL_STATE: QueueContextType = {
    queue_state: "NONE",
    room_info: undefined,
    room_id: undefined,
}

export type QueueActionType =
    | { type: "INQUEUE" }
    | { type: "ENTER", payload: string}
    | { type: "GETQUEUE", payload: string}
    | { type: "UPDATE", payload: GameRoomInfo }
    | { type: "NONE" }

export const QueueStateContext = createContext<QueueContextType>(INITIAL_STATE);
export const QueueDispatchContext = createContext<Dispatch<QueueActionType> | null>(null);


const queueReducer = (state: QueueContextType, action: QueueActionType): QueueContextType => {
    switch (action.type) {
        case "INQUEUE": {
            return ({ queue_state: "INQUEUE", room_info: undefined, room_id: undefined });
        }
        case "ENTER" : {
            const _id = action.payload;
            return ({ queue_state: "INQUEUE", room_info: undefined, room_id: _id });
        }
        case "GETQUEUE" : {
            const _id = action.payload;
            return ({ queue_state: "GETQUEUE", room_info: undefined, room_id: _id });
        }
        case "UPDATE": {
            const _info = action.payload;
            return ({room_id: _info.id , queue_state: "UPDATE",
            room_info: { id: _info.id, name: _info.name, access_modifier: _info.access_modifier,
                         player_list: [..._info.player_list], spectator_list: [..._info.spectator_list], ready: {..._info.ready}}
            });
        }
        case "NONE": {
            return ({ queue_state: "NONE", room_info: undefined, room_id: undefined });
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
