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
  width: 20rem;
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
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 1em;
  height: 100%;
  &:hover {
    background: var(--light-gray);
  }
`;

const OnlineText = styled.div`
  padding: 0.2em 0 0 0;
  font-size: 1.5rem;
  color: var(--white);
`;

const OfflineText = styled.div`
  padding: 0.2em 0 0 0;
  font-size: 1.5rem;
  color: var(--light-gray);
`;

const Circle = styled.div<dynamicColor>`
  margin: 0.3em;
  width: 0.4em;
  height: 0.4em;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const NameContainer = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
  align-content: center;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background: transparent;
`;

const DeleteButton = styled.div`
  background: transparent;
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
  margin-top: 1.5rem;
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
  cursor: pointer;
`;

const Sidebar = () => {
  const { token } = useAuthState();
  const [onlineFriends, setOnlineFriends] = useState<Friend[]>([]);
  const [offlineFriends, setOfflineFriends] = useState<Friend[]>([]);
  const [searchFriendModal, setSearchFriendModal] = useState(false);

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
        console.log(Friends);
        setOnlineFriends([...onlineArray]);
        setOfflineFriends([...offlineArray]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addFriendHandler = async (friend_intra_name: string) => {
    try {
      const response = await axios.put(
          Url + "user/friends",
          {
            intra_id: friend_intra_name,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
          )
      getFriends();
    } catch (error) {
      console.error("add friend failed", friend_intra_name);
      throw (error);
    }
  };

  const deleteFriendHandler = async (friend_intra_name: string) => {
    await axios
      .delete(Url + "user/friends", {
        headers: {
          Authorization: "Bearer " + token,
        },
        data: {
          intra_id: friend_intra_name,
        },
      })
      .then((response) => {
        console.log("added Friend: " + response.status);
        getFriends();
      })
      .catch((error) => {
        console.error("add friend failed", friend_intra_name);
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
              <NameContainer>
                <Circle color="var(--yellow)" />
                <OnlineText>{item.nickname}</OnlineText>
              </NameContainer>
              <ButtonContainer>
                <StyledLink to={"/social/" + item.nickname}>💬</StyledLink>
                <DeleteButton
                  onClick={() => {
                    deleteFriendHandler(item.intra_id);
                  }}
                >
                  ✖️
                </DeleteButton>
              </ButtonContainer>
            </FriendWrapper>
          ))}
        </OnlineList>
        <OfflineList>
          {offlineFriends.map((item: Friend, index) => (
            <FriendWrapper key={index}>
              <NameContainer>
                <Circle color="var(--purple)" />
                <OfflineText>{item.nickname}</OfflineText>
              </NameContainer>
              <ButtonContainer>
                <StyledLink to={"/social/" + item.nickname}>💬</StyledLink>
                <DeleteButton
                  onClick={() => {
                    deleteFriendHandler(item.intra_id);
                  }}
                >
                  ✖️
                </DeleteButton>
              </ButtonContainer>
            </FriendWrapper>
          ))}
        </OfflineList>
        <Button onClick={() => setSearchFriendModal(true)}>➕</Button>
        {searchFriendModal ? (
          <ModalPortal>
            <UserSearch
              modalHandler={() => {
                setSearchFriendModal(false);
              }}
              addFriendHandler={addFriendHandler}
            ></UserSearch>
          </ModalPortal>
        ) : null}
      </Container>
    </Wrapper>
  );
};

export default Sidebar;
