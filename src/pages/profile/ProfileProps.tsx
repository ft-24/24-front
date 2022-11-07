
export interface RecordProps {
  myname: string;
  myscore: number;
  opname: string;
  opscore: number;
  result: boolean;
  time: number;
}

export class UserProps {
  Stats: Map<string, number>;
  Record: Map<string, RecordProps>;
  nickname: string;
  profimgdir: string;
  rank: number;

  constructor (
    stats:  Map<string, number>,
    record: Map<string, RecordProps>,
    nickname: string,
    profimgdir: string,
    rank: number,) {
    this.Stats = new Map(Object.entries(stats));
    this.Record = new Map(Object.entries(record));
    this.nickname = nickname;
    this.profimgdir = profimgdir;
    this.rank = rank;
  }
}
