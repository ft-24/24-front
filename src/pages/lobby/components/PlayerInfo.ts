class PlayerInfo {
  intra_id: string;
  nickname: string;
  profile_url: string;
  ladder_score?: number;

  constructor(i: string, n: string, img: string, ladder_score?: number) {
    this.intra_id = i;
		this.nickname = n;
		this.profile_url = img;
    this.ladder_score = ladder_score;
  }
}

export default PlayerInfo;