import PlayerInfo from "./PlayerInfo";

export type GameRoomInfo = {
	id: string,
	name: string,
	access_modifier: string,
	player_list: PlayerInfo[],
	spectator_list: PlayerInfo[],
}