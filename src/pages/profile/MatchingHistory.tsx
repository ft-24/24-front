import styled from 'styled-components';

import { historyProps } from './UserProps';

const RecordContainer = styled.div`
  width: 70vw;
  border-width: 1px;
  display: grid;
  justify-content: center;
  font-size: 1.5rem;
  grid-template-columns: 1fr 2fr 1fr 2fr;
  grid-template-rows: 1fr 2fr;
  grid-template-areas:
  "time my score opp"
  "result my score opp";
  & > * {
    display: flex;
    border-width: 0.5px;
    border-style: solid solid solid hidden;
    white-space: pre-line;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0);
    font-family: SBAggroL;
  } 
`;

const Img = styled.img`
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  margin: 0.25rem;
  background: rgba( 0, 0, 0, 0 );
`;

const Time = styled.div`
  font-size: 1rem;
  grid-area: time;
  text-overflow: clip;
  overflow: hidden;
`

const My = styled.div`
  grid-area: my;
`

const Score = styled.div`
  grid-area: score;
`

const Opp = styled.div`
  grid-area: opp;
  border-style: solid hidden;
`

const Result = styled.div`
  grid-area: result;
`

const MatchingHistory = ({name, image, history} : {name: string, image: string, history: historyProps}) => {
  const score: string = history.score.toString() + ":" + history.opponent_score.toString();
  const winlose: string = history.win? "win!" : "lose...";

  return (
    <RecordContainer>
      <Time>{history.played_at}</Time>
      <Result>{winlose}</Result>
      <My>
        <Img src={image} alt="not fount" />
        {name}
      </My>
      <Score>{score}</Score>
      <Opp>
        <Img src={history.opponent_url} alt="not fount" />
        {history.opponent_nickname}
      </Opp>
    </RecordContainer>
  );
}

export default MatchingHistory;
