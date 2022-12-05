import styled from "styled-components";
import { statsProps } from "./UserProps";

const Wrapper = styled.div`
  align-items: center;
  grid-area: stats;
`

const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  font-size: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
  "stat stat"
  "stat stat";
  & > * {
    display: flex;
    border-width: 0.5px;
    white-space: pre-line;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0);
    font-family: SBAggroL;
  }
`

const Stat = styled.div`
  margin: 0.5em;
  font-size: 2em;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0);
`;

const Table = styled.table`
  background-color: rgba(0, 0, 0, 0);
`

const UserStats = ({stats} : {stats : statsProps}) => {
  return (
    <Wrapper>
      <GridContainer>
          <Stat>{"Rank: " + stats.ladder_score}</Stat>
          <Stat>{"Arcade: " + stats.arcade_score}</Stat>
          <Stat>{"Total Win: " + stats.wins}</Stat>
          <Stat>{"Total Lose: " + stats.loses}</Stat>
      </GridContainer>
    </Wrapper>
  );
}

export default UserStats;