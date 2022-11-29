import { useState } from "react";
import styled from "styled-components";

const Stat = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-size: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba( 0, 0, 0, 0 );
`;

const UserStats = ({stats} : {stats : Map<string, number>}) => {
  return (
    <>
    <Stat> {"Rank : " + stats.get("rank")}</Stat>
    <Stat> {"Win : " + stats.get("totalWin") + "  Lose : " + stats.get("totalLose")}</Stat>
    </>
  );
}

export default UserStats;