import { useContext } from "react";
import { QueueStateContext, QueueDispatchContext } from "./QueueContext"

export function useQueueState () {
    const state = useContext(QueueStateContext);
    if (!state) throw new Error();
    return state
}

export function useQueueDispatch () {
    const dp = useContext(QueueDispatchContext);
    if (!dp) throw new Error();
    return dp
}