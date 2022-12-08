import { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileButton from "./ProfileButton";
import LogoButton from "./LogoButton";
import FriendsButton from "./FriendsButton";
import MatchingWaitBall from "../../components/MatchingWaitBall";
import { useQueueDispatch, useQueueState } from "../../context/QueueHooks";
import MatchingModal from "../../components/modals/MatchingModal";
import ModalPortal from "../../components/modals/ModalPotal";
import useSocket from "../../context/useSocket";

const HeadBar = styled.div`
  z-index: 8;
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  background: var(--dark-gray);
  font-family: SBAggroM;
  font-size: 24px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [matchingBall, setMatchingBall] = useState(false);
  const [matchingModal, setMatchingModal] = useState(false);
  const queueState = useQueueState();
  const queueDispatch = useQueueDispatch();
  const {socket} = useSocket();

  useEffect(()=>{
    if (queueState.queue_state === "INQUEUE") {
      setMatchingBall(true);
      setMatchingModal(false);
    }
    else if (queueState.queue_state === "GETQUEUE") {
      setMatchingBall(false);
      setMatchingModal(true);
    }
    else {
      setMatchingBall(false);
      setMatchingModal(false);
    }
  },[queueState]);

  const matchingBallCancel = () => {
    socket?.emit('unqueue');
    setMatchingBall(false);
    queueDispatch({type:"NONE"});
  }

  const matchingModalCancel = () => {
    setMatchingModal(false);
    queueDispatch({type:"NONE"});
  }

  return (
    <HeadBar>
      <div>
        <ProfileButton />
      </div>
      <div>
        <LogoButton />
      </div>
      <div>
        <FriendsButton toggle={toggle} setToggle={setToggle} />
      </div>
      {matchingBall &&
        <MatchingWaitBall handler={matchingBallCancel}/>
      }
      {matchingModal &&
        <ModalPortal><MatchingModal modalHandler={matchingModalCancel} /></ModalPortal>
      }
    </HeadBar>
  );
};

export default Header;
