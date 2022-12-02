class PlayerInfo {
  intra: string;
  nickname: string;
  image: string;

  constructor(i: string, n: string, img: string) {
    this.intra = i;
		this.nickname = n;
		this.image = img;
  }
}

export default PlayerInfo;