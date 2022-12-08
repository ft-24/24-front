import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useAuthState } from "../context/AuthHooks";
import useSocket from "../context/useSocket";
import PlayerInfo from "../pages/lobby/components/PlayerInfo";
import { ReadyContext, PlayerState } from "../pages/ingame/index";
import { motion } from "framer-motion";

type DynamicColor = {
  color: string;
};

const CardWrapper = styled.div<DynamicColor>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  position: relative;
  max-width: 30vw;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
  background-color: var(${(props) => props.color});
  color: ${(props) => (props.color == "--yellow" ? "black" : "white")};
`;

type DynamicSize = {
  size: string;
};

const ProfileImg = styled.img<DynamicSize>`
  display: block;
  margin: 10px;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

const NicknameText = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-family: NanumSquareB;
`;

const IntraText = styled.div<DynamicColor>`
  text-align: center;
  font-size: 1rem;
  color: var(${(props) => props.color});
  font-family: NanumSquareR;
`;

const SpectatorCard = styled.div`
  max-width: 40%;
  border-radius: 2rem;
  padding: 1rem 2rem;
  margin: 1rem 0.5rem;
  background-color: white;
  color: black;
  align-self: flex-start;
`;

const ReadyButton = styled.button``;

const IsME = styled(motion.div)`
  position: absolute;
  width: 2rem;
  background: transparent;
  top: -1.2rem;
  left: calc(50% - 1rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-content: center;
  & > img {
	  background: transparent;
	  width: 100%;
	  height: auto;
	}
	& > p {
	  font-size: 1rem;
  text-align: center;
    background: transparent;
	font-family: SBAggroB;
	text-shadow: var(--dark-gray) 2px 2px;
  }
`;

const PlayerCard = (props: { type: string; player: PlayerInfo; isReady?: boolean }) => {
  const RenderCard = () => {
    const { socket } = useSocket();
    const [isMine, setIsMine] = useState(false);
    const { intra } = useAuthState();
    const pState = useContext(ReadyContext);

    useEffect(() => {
      if (props.player.intra_id === intra) {
        setIsMine(true);
      }
    }, []);

    const getReady = () => {
      if (isMine) {
        if (pState.pState === PlayerState.stay) {
          pState.setPState(PlayerState.ready);
          socket?.emit("ready", {is_ready:true});
        }
      }
    };

    switch (props.type) {
      case "purple":
        return (
          <CardWrapper color="--purple">
			  {isMine ?
            <IsME
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <img src="/images/arrow.png"></img>
            </IsME> : null}
            <ProfileImg src={props.player.profile_url} size="100px" />
            <NicknameText>{props.player.nickname}</NicknameText>
            <IntraText color="--light-light-gray">
              {props.player.intra_id}
            </IntraText>
            <ReadyButton disabled={!isMine} onClick={getReady}>
            {isMine ? (pState.pState !== PlayerState.stay  ? "Set!" : "Ready!") : (props.isReady === true ? "Set!" : "Ready!")}
            </ReadyButton>
          </CardWrapper>
        );
      case "yellow":
        return (
          <CardWrapper color="--yellow">
			{isMine ?
            <IsME
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <img src="/images/arrow.png"></img>
            </IsME> : null}
            <ProfileImg src={props.player.profile_url} size="100px" />
            <NicknameText>{props.player.nickname}</NicknameText>
            <IntraText color="--light-gray">{props.player.intra_id}</IntraText>
            <ReadyButton disabled={!isMine} onClick={getReady}>
              {isMine ? (pState.pState !== PlayerState.stay ? "Set!" : "Ready!") : (props.isReady === true ? "Set!" : "Ready!")}
            </ReadyButton>
          </CardWrapper>
        );
      case "spectator":
        return <SpectatorCard>{props.player.intra_id}</SpectatorCard>;
    }
  };

  return <>{RenderCard()}</>;
};

export default PlayerCard;
