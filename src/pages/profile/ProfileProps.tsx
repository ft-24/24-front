import RecordForm from "./RecordForm";

export interface RecordProps {
  myname: string;
  myscore: number;
  opname: string;
  opscore: number;
  result: boolean;
  time: number;
}

export class Item {
  label: string;
  value: number;

  constructor(l: string, v: number) {
    this.label = l;
    this.value = v;
  }
}

export class UserProps {
  /*
  intra_id: string;
  nickname: string;
  profile_url: string;
  stats: Array<Item>;
  matching_history: Map<string, RecordProps>;

  constructor (
    i: string, n: string, p: string,
    stats: Array<Item>,
    matching: Map<string, RecordProps>
  ) {
    this.intra_id = i;
    this.nickname = n;
    this.profile_url = p;
    this.stats = stats;
    this.matching_history = new Map<string, RecordProps>();
  }*/
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
