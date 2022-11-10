import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  height: 100vh;
  width: 8em;
  background: var(--light-gray);
`;

type dynamicHeight = {
  count : number
}

type dynamicColor = {
  color : string
}

const OnlineList = styled.div<dynamicHeight>`
  margin: 0.5em 0.25em 0 0.25em;
  height: ${props=>(props.count * 1.25).toString()}em;
`;

const OfflineList = styled.div`
`;

const FriendWrapper = styled.div`
  margin: 0.25em 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 1em;
`;

const FriendText = styled.div`
  padding: 0.2em 0 0 0;
  line-height: 1em;
  font-size: 0.8em;
`;

const Circle = styled.div<dynamicColor>`
  margin: 0.3em;
  width: 0.4em;
  height: 0.4em;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const FriendsList = [
  {
    nickname: 'Name1',
    online: true,
  },
  {
    nickname: 'Name2',
    online: true,
  },
  {
    nickname: 'Name3',
    online: true,
  }
]

const Sidebar = () => {
  return (
    <Wrapper className='sidebar'>
      <OnlineList count={FriendsList.length}>
        {
          FriendsList.map((item, index) => (
            <FriendWrapper>
              {item.online? <Circle color='var(--yellow)' /> : <Circle color='var(--purple)' />}
              <FriendText>{item.nickname}</FriendText>
            </FriendWrapper>
          ))
        }
      </OnlineList>
      <OfflineList>

      </OfflineList>
    </Wrapper>
  );
}

export default Sidebar;