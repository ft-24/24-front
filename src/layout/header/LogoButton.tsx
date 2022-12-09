import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQueueDispatch, useQueueState } from "../../context/QueueHooks"
import useSocket from "../../context/useSocket";

const Logo = styled.div`
  width: 15vw;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`

const LogoButton = () => {
  const dispatch = useQueueDispatch();
  const {room_id} = useQueueState();
  const {socket} = useSocket();

  const leaveRoom = () => {
    if (room_id) {
      dispatch({type:"NONE"});
      socket?.emit('leave', {id:room_id});
    }
  }

  return (
	<Logo>
	<StyledLink to="/" onClick={leaveRoom}>로 고</StyledLink>
  </Logo>
)
}

export default LogoButton
