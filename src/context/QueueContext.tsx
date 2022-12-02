import { createContext, useReducer, Dispatch } from "react";
import { useNavigate } from "react-router-dom";

type QueueContextType = {
    queue_state: "INQUEUE" | "NONE" | "MATCHED" | "WAIT" | "INGAME",
    room: string | undefined,
}

const INITIAL_STATE : QueueContextType = {
    queue_state: "NONE",
    room: undefined,
}

export type QueueActionType =
  | { type: "INQUEUE" }
  | { type: "WAIT", payload: string }
  | { type: "MATCHED", payload: string }
  | { type: "NONE" }
  | { type: "INGAME"}

export const QueueStateContext = createContext<QueueContextType>(INITIAL_STATE);
export const QueueDispatchContext = createContext<Dispatch<QueueActionType> | null>(null);

const queueReducer = (state: QueueContextType, action:QueueActionType) : QueueContextType => {
    switch (action.type) {
        case "INQUEUE" : {
            return ({...state, queue_state: "INQUEUE" });
        }
        case "WAIT" : {
            return ({queue_state: "WAIT", room: action.payload});
        }
        case "MATCHED" : {
            return ({queue_state: "MATCHED", room: action.payload});
        }
        case "NONE" : {
            return ({queue_state: "NONE", room: undefined});
        }
        case "INGAME" : {
            return ({...state, queue_state: "INGAME"});
        }
    }
}

export const QueueContextProvider =  ({ children }:{ children: JSX.Element[] }) => {
    const [state, dispatch] = useReducer(queueReducer, INITIAL_STATE);

    return (
        <QueueStateContext.Provider value={state}>
            <QueueDispatchContext.Provider value={dispatch}>
                {children}
            </QueueDispatchContext.Provider>
        </QueueStateContext.Provider>
    )
}