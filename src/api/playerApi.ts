import { PlayerModel } from "../models/player";
export module PlayerApi {

    const baseUrl = "https://table-football-c48e9-default-rtdb.firebaseio.com";

    export const getAllPlayers = () => {
        return fetch(`${baseUrl}/players.json`);
    }

    export const getPlayerById = (playerId:string) => {
        return  fetch(`https://table-football-c48e9-default-rtdb.firebaseio.com/players/${playerId}.json`)
    }

    export const updatePlayer = (player: PlayerModel) => {
        return fetch(`https://table-football-c48e9-default-rtdb.firebaseio.com/players/${player.id}.json`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify({
                    img: player?.img,
                    losses: player?.losses,
                    name: player?.name,
                    victories: player?.victories
                })
            }
        )
    }



}






