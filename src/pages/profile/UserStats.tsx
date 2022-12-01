import styled from "styled-components";
import { statsProps } from "./UserProps";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: stats;
`

const Stat = styled.div`
  margin: 0.5em;
  font-size: 2em;
  justify-content: center;
  align-items: center;
  background: rgba( 0, 0, 0, 0 );
`;

const UserStats = ({stats} : {stats : statsProps}) => {
  return (
    <Wrapper>
      <table>
        <tbody>
          <tr>
            <td>
              <Stat>{"Rank: " + stats.ladder_score}</Stat>
            </td>
            <td>
              <Stat>{"Arcade: " + stats.arcade_score}</Stat>
            </td>
          </tr>
          <tr>
            <td>
              <Stat>{"Win: " + stats.wins.toString()}</Stat>
            </td>
            <td>
              <Stat>{"Lose: " + stats.loses.toString()}</Stat>
            </td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
}

export default UserStats;