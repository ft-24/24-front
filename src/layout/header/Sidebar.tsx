import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthState } from '../../context/AuthHooks';
import { Url } from '../../constants/global';

const Wrapper = styled.div`
  z-index: 4;
  position: absolute;
  right: -2rem;
  height: 100vh;
  width: 8em;
  background: var(--dark-gray);
`;

type dynamicColor = {
  color: string
}

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
  background-color: ${props=>props.color};
`;

type Friend = {
  nickname: string,
  online: boolean,
}

const Sidebar = () => {
  const [onlineFriends, setOnlineFriends] = useState<Friend[]>([]);
  const [offlineFriends, setOfflineFriends] = useState<Friend[]>([]);
  const { token } = useAuthState();

  const getFriends = async () => {
      try {
        const response = await axios({
          url: Url + 'user/friends',
          method: 'get',
          headers: { 'token': 'bearer ' + token }
        });
        const Friends = await response.data;
        const onlineArray : Friend[] = [];
        const offlineArray : Friend[] = [];
        for (let friend of Friends) {
          friend.online ? onlineArray.push(friend) : offlineArray.push(friend);
        }
        setOnlineFriends([...onlineArray]);
        setOfflineFriends([...offlineArray]);
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(()=>{
    getFriends();
  }, []);

  return (
    <Wrapper className='sidebar'>
      <OnlineList>
        {
          onlineFriends.map((item : Friend, index) => (
              <FriendWrapper key={index}>
                <Circle color='var(--yellow)' />
                <OnlineText>{item.nickname}</OnlineText>
              </FriendWrapper>
          ))
        }
      </OnlineList>
      <OfflineList>
      {
          offlineFriends.map((item : Friend, index) => (
              <FriendWrapper key={index}>
                <Circle color='var(--purple)' />
                <OfflineText>{item.nickname}</OfflineText>
              </FriendWrapper>
          ))
        }
      </OfflineList>
    </Wrapper>
  );
}

export default Sidebar;
