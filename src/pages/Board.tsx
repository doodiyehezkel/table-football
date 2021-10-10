import { FC, useEffect, useState } from "react";
import PlayerList from "../components/table-football/PlayerList";
import { PlayerModel } from "../models/player";
import GameScoreManagement from "../components/table-football/GameScoreManagement";


const Board: FC = () => {

    const [playerListTemp, setPlayerListTemp] = useState<PlayerModel[]>([])

    const [playerListSearch, setplayerListSearch] = useState<PlayerModel[]>([])

    const [isPlayerLoaded, setIsPlayerLoaded] = useState(false)

    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        console.log("board useEffect");
        
        fetch('https://table-football-c48e9-default-rtdb.firebaseio.com/player.json')
            .then(response => response.json())
            .then(players => {
                const playerListFetch = [];
                for (const key in players) {
                    const player = {
                        id: key,
                        ...players[key]
                    }
                    playerListFetch.push(player);
                }
                setPlayerListTemp(playerListFetch);
                setplayerListSearch(playerListFetch);
                setIsPlayerLoaded(true);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    

    const onSearchHelper = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const statePlayer = playerListTemp.filter(player => {
            return player.name.toLowerCase().includes(value.toLowerCase())
        })
        setplayerListSearch(statePlayer)
        setSearchValue(value)
    }

    const victoriesHandler = (playerId: string[]) => {
        let playersUpdate: PlayerModel[] = [...playerListTemp]
        let players: PlayerModel[] = []
        
        for (let i = 0; i < playersUpdate.length; i++) {
            for (let j = 0; j < playerId.length; j++) {
                if (playersUpdate[i].id === playerId[j]) {
                    playersUpdate[i].victories++
                    players.push(playersUpdate[i])
                }
            }
        }

        for (let i = 0; i < players.length; i++) {
            if (players[i] !== undefined) {
                return fetch(`https://table-football-c48e9-default-rtdb.firebaseio.com/player/${players[i].id}.json`,
                    {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: "PUT",
                        body: JSON.stringify({
                            img: players[i]?.img,
                            losses: players[i]?.losses,
                            name: players[i]?.name,
                            victories: players[i]?.victories
                        })
                    }
                )
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        setPlayerListTemp(playersUpdate);
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            }
        }
    }

    const lossesHandler = (playerId: string) => {
        let playersUpdate: PlayerModel[] = [...playerListTemp]
        let players: PlayerModel[] = []

        for (let i = 0; i < playersUpdate.length; i++) {
            for (let j = 0; j < playerId.length; j++) {
                if (playersUpdate[i].id === playerId[j]) {
                    playersUpdate[i].losses++
                    players.push(playersUpdate[i])
                }
            }
        }

        for (let i = 0; i < players.length; i++) {
            if (players[i] !== undefined) {
                return fetch(`https://table-football-c48e9-default-rtdb.firebaseio.com/player/${players[i].id}.json`,
                    {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: "PUT",
                        body: JSON.stringify({
                            img: players[i]?.img,
                            losses: players[i]?.losses,
                            name: players[i]?.name,
                            victories: players[i]?.victories
                        })
                    }
                )
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        setPlayerListTemp(playersUpdate);
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            }
        }

    }

    if (!isPlayerLoaded)
        return <h1>Loading... </h1>

    return (
        <>
            <h1>Players Board</h1>
            <input name="search" type="search" onChange={onSearchHelper} value={searchValue} placeholder="player search" />
            {
                searchValue === "" && 
                <GameScoreManagement 
                    playerList={playerListTemp}
                    victoriesHandler={victoriesHandler}
                    lossesHandler={lossesHandler} 
                />
            }
            <PlayerList 
                playerList={playerListSearch}
                victoriesHandler={victoriesHandler}
                lossesHandler={lossesHandler}
            />
        </>
    )
}

export default Board;