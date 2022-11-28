import MatchingHistory from "./MatchingHistory";

export interface RecordProps {
  myname: string;
  myscore: number;
  opname: string;
  opscore: number;
  result: boolean;
  time: number;
}

export class UserProps {
  intra_id: string;
  nickname: string;
  profile_url: string;
  two_factor: boolean;
  stats: Map<string, number>;
  matching_history: Array<RecordProps>;

  constructor (
    intra_id: string,
    nickname: string,
    profile_url: string,
    two_factor: boolean,
    stats:  Map<string, number>,
    matching_history: Array<RecordProps>,
    ) {
    this.intra_id = intra_id;
    this.nickname = nickname;
    this.profile_url = profile_url;
    this.two_factor = two_factor;
    this.stats = new Map(Object.entries(stats));
    this.matching_history = [...matching_history];
  }
}
