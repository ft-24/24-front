export interface RecordProps {
  myname: string;
  myscore: number;
  opname: string;
  opscore: number;
  result: boolean;
  time: number;
}

function RecordForm(record: RecordProps) {
  const score: string = record.myscore.toString() + " : " + record.opscore.toString();
  const winlose: string = record.result? "win!" : "lose...";

  return (
    <div>
      <p>{ "game time : " +  record.time + "  |  result : " + winlose}</p>
      <p> {record.myname + "(" + record.myscore + ") vs " + record.opname + "(" + record.opscore + ")"} </p>
    </div>
  );
}

export default RecordForm;
