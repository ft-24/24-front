import PlayerInfo from "./PlayerInfo";

type PReady = {
	p1: boolean,
	p2: boolean
}

export type GameRoomInfo = {
	id: string,
	name: string,
	access_modifier: string,
	player_list: PlayerInfo[],
	spectator_list: PlayerInfo[],
	ready: PReady,
}