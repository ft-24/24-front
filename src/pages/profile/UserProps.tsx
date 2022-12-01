import MatchingHistory from "./MatchingHistory";

export interface historyProps {
  opponent_url: string;
  opponent_nickname: string;
  win: boolean;
  score: number;
  opponent_score: number;
  mode: string;
  played_at: string;
}

export interface statsProps {
  wins: number,
  loses: number,
  ladder_score: number,
  arcade_score: number,
}

export class UserProps {
  intra_id: string;
  nickname: string;
  profile_url: string;
  two_factor: boolean;
  stats: statsProps;
  matching_history: Array<historyProps>;

  constructor (
    intra_id: string,
    nickname: string,
    profile_url: string,
    two_factor: boolean,
    stats: statsProps,
    matching_history: Array<historyProps>,
    ) {
    this.intra_id = intra_id;
    this.nickname = nickname;
    this.profile_url = profile_url;
    this.two_factor = two_factor;
    this.stats = stats;
    this.matching_history = matching_history;
  }
}
