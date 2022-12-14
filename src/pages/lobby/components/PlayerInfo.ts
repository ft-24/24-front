class PlayerInfo {
  intra_id: string;
  nickname: string;
  profile_url: string;
  ladder_score: number;
  is_my_friend?: boolean;
  is_blocked?:boolean;

  constructor(
    i: string,
    n: string,
    img: string,
    ladder_score: number,
    is_my_friend?: boolean,
    is_blocked?:boolean) {
    this.intra_id = i;
		this.nickname = n;
		this.profile_url = img;
    this.ladder_score = ladder_score;
    this.is_my_friend = is_my_friend ?? false;
    this.is_blocked = is_blocked ?? false;
  }
}

export default PlayerInfo;
