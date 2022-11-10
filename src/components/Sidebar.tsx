import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';

const Wrapper = styled.div`
  z-index: 4;
  position: fixed;
  top: 60px;
  right: 0;
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
  font-color: var(--white);
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

class Item {
  nickname: string;
  online: boolean;

  constructor(n: string, o: boolean) {
    this.nickname = n;
    this.online = o;
  }
}

const Sidebar = () => {
  let friendsList = new Array<Item>;

  friendsList.push(new Item("sunhkim", true));
  friendsList.push(new Item("yoahn", false));
  friendsList.push(new Item("seonhjeo", true));
  friendsList.push(new Item("chanhuil", false));
  friendsList.push(new Item("young-ch", true));

  const getData = async() => {
    let token = localStorage.getItem('token');
    if (token) {
      console.log("getData() in Sidebar Called");
      try {
        const response = await axios({
          url: 'http://user/friends',
          method: 'get',
          headers: { 'token': 'bearer ' + token }
        });
        friendsList = response.data;
      } catch (error) {
        console.error("[Error] frends List Get Failed!");
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper className='sidebar'>
      <OnlineList>
        {
          friendsList.map((item : Item, index) => (
            <>
            {item.online ?
              <FriendWrapper key={index}>
                <Circle color='var(--yellow)' />
                <OnlineText>{item.nickname}</OnlineText>
              </FriendWrapper>
              : null}
            </>
          ))
        }
      </OnlineList>
      <OfflineList>
        {
          friendsList.map((item : Item, index) => (
            <>
            {!item.online ?
              <FriendWrapper>
                <Circle color='var(--purple)' />
                <OfflineText>{item.nickname}</OfflineText>
              </FriendWrapper>
              : null}
            </>
          ))
        }
      </OfflineList>
    </Wrapper>
  );
}

export default Sidebar;