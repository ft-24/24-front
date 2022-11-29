import styled from 'styled-components';

import { historyProps } from './ProfileProps';

const RecordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  justify-content: center;
  align-items: center;
  background: rgba( 0, 0, 0, 0 );
`;

const RecordP = styled.p`
  border-width: 1px;
  border-style: solid;
  white-space: pre-line;
  text-align: center;
  background: rgba( 0, 0, 0, 0 );
`;

const RecordContainer = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  width: 70vw;
  border-width: 2px;
  border-style: solid;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 2fr 1fr 2fr;
  grid-template-rows: 1fr 2fr;
  grid-template-areas:
  "time my score opp"
  "result my score opp";
  & > * {
    display: flex;
    border-width: 1px;
    border-style: solid;
    white-space: pre-line;
    align-items: center;
    justify-content: center;
    background: rgba( 0, 0, 0, 0 );
    font-family: SBAggroM;
  }
`;

const Time = styled.div`
  grid-area: time;
`

const My = styled.div`
  grid-area: my;
  font-size: 3rem;
`

const Score = styled.div`
  grid-area: score;
  font-size: 1rem;
`

const Opp = styled.div`
  grid-area: opp;
  font-size: 1rem;
`

const Result = styled.div`
  grid-area: result;
  font-size: 2rem;
`

const MatchingHistory = ({name, image, history} : {name: string, image: string, history: historyProps}) => {
  const score: string = history.score.toString() + ":" + history.opponent_score.toString();
  const winlose: string = history.win? "win!" : "lose...";

  return (
    <RecordWrapper>
      <RecordContainer>
        <Time>{history.played_at}</Time>
        <Result>{winlose}</Result>
        <My>{name}</My>
        <Score>{score}</Score>
        <Opp>{history.opponent_name}</Opp>
      </RecordContainer>
    </RecordWrapper>
  );
}

export default MatchingHistory;
