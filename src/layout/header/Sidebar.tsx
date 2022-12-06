import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "../../context/AuthHooks";
import { Url } from "../../constants/Global";
import { Link } from "react-router-dom";
import UserSearch from "../../components/modals/UserSearch";
import ModalPortal from "../../components/modals/ModalPotal";

const Wrapper = styled.div`
  z-index: 4;
  position: absolute;
  right: -2rem;
  height: 100vh;
  width: 8em;
  background: var(--dark-gray);
`;

type dynamicColor = {
  color: string;
};

const OnlineList = styled.div`
  margin: 0.5em 0.25em 0 0.25em;
  height: auto;
`;

const OfflineList = styled.div`
  margin: 0 0.25em 0.5em 0.25em;
  height: auto;
`;

const FriendWrapper = styled.div`
  margin: 0.25em 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 1em;
`;

const OnlineText = styled.div`
  padding: 0.2em 0 0 0;
  line-height: 1em;
  font-size: 0.8em;
  color: var(--white);
`;

const OfflineText = styled.div`
  padding: 0.2em 0 0 0;
  line-height: 1em;
  font-size: 0.8em;
  color: var(--light-gray);
`;

const Circle = styled.div<dynamicColor>`
  margin: 0.3em;
  width: 0.4em;
  height: 0.4em;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

type Friend = {
  intra_id: string;
  nickname: string;
  online: boolean;
};

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Button = styled.div`
  position: absolute;
  background: var(--yellow);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  bottom: 10rem;
  left: calc(50% - 40px);
  font-size: 50px;
`;

const Sidebar = () => {
  const [onlineFriends, setOnlineFriends] = useState<Friend[]>([]);
  const [offlineFriends, setOfflineFriends] = useState<Friend[]>([]);
  const { token } = useAuthState();
  const [searchFriend, setSearchFriend] = useState(false);

  const getFriends = async () => {
    await axios
      .get(Url + "user/friends", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        const Friends = response.data;
        const onlineArray: Friend[] = [];
        const offlineArray: Friend[] = [];
        for (let friend of Friends) {
          friend.online ? onlineArray.push(friend) : offlineArray.push(friend);
        }
        setOnlineFriends([...onlineArray]);
        setOfflineFriends([...offlineArray]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <Wrapper className="sidebar">
      <Container>
        <OnlineList>
          {onlineFriends.map((item: Friend, index) => (
            <FriendWrapper key={index}>
              <Circle color="var(--yellow)" />
              <Link to={"/social/" + item.nickname}>
                <OnlineText>{item.nickname}</OnlineText>
              </Link>
            </FriendWrapper>
          ))}
        </OnlineList>
        <OfflineList>
          {offlineFriends.map((item: Friend, index) => (
            <FriendWrapper key={index}>
              <Circle color="var(--purple)" />
              <Link to={"/social/" + item.nickname}>
                <OfflineText>{item.nickname}</OfflineText>
              </Link>
            </FriendWrapper>
          ))}
        </OfflineList>
        <Button onClick={() => setSearchFriend(true)}>➕</Button>
        {searchFriend ? (
          <ModalPortal>
            <UserSearch
              modalHandler={() => {
                setSearchFriend(false);
              }}
            ></UserSearch>
          </ModalPortal>
        ) : null}
      </Container>
    </Wrapper>
  );
};

export default Sidebar;
