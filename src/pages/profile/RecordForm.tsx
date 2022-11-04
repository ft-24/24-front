import styled from 'styled-components';

import { RecordProps } from './ProfileProps';

const RecordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  justify-content: center;
  align-items: center;
`;

const RecordP = styled.p`
  border-width: 1px;
  border-style: solid;
  white-space: pre-line;
  text-align: center;
`;

function RecordForm(record: RecordProps) {
  const score: string = record.myscore.toString() + " : " + record.opscore.toString();
  const winlose: string = record.result? "win!" : "lose...";

  return (
    <RecordWrapper>
      <RecordP>{ "game time : " +  record.time + "  |  result : " + winlose + "\n" + record.myname + "(" + record.myscore + ") vs " + record.opname + "(" + record.opscore + ")"} </RecordP>
    </RecordWrapper>
  );
}

export default RecordForm;
