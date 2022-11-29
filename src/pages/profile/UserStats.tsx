import { useState } from "react";
import styled from "styled-components";
import { statsProps } from "./ProfileProps";

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

const UserStats = ({stats} : {stats : statsProps}) => {
  return (
    <>
    <Stat>{"Rank: " + stats.ladder_score}</Stat>
    <Stat>{"Arcade: " + stats.arcade_score}</Stat>
    <Stat>{"Win: " + stats.wins.toString() + " Lose: " + stats.loses.toString()}</Stat>
    </>
  );
}

export default UserStats;