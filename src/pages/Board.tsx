import { FC, useEffect, useState } from "react";
import PlayerList from "../components/table-football/PlayerList";
import { PlayerModel } from "../models/player";
import GameScoreManagement from "../components/table-football/GameScoreManagement";
import { PlayerApi } from "../api/playerApi"

const Board: FC = () => {

    const [playerListTemp, setPlayerListTemp] = useState<PlayerModel[]>([])

    const [playerListSearch, setplayerListSearch] = useState<PlayerModel[]>([])

    const [isPlayerLoaded, setIsPlayerLoaded] = useState(false)

    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        PlayerApi.getAllPlayers()
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

    const setScore = (playerId: { id: string, loseOrWin: boolean }[]) => {
        let playersUpdate: PlayerModel[] = JSON.parse(JSON.stringify(playerListTemp));
        let players: PlayerModel[] = [];

        const getPlayerByIdPromises = playerId.map(player => PlayerApi.getPlayerById(player.id))

        return Promise.all(getPlayerByIdPromises)
            .then(responseArray => Promise.all(responseArray.map(res => {
                return res.json()
            })))
            .then(dataArray => {
                playerId.forEach((player, index) => {
                    if (player.loseOrWin)
                        players.push({ ...dataArray[index], id: player.id, victories: dataArray[index].victories + 1 })
                    else {
                        players.push({ ...dataArray[index], id: player.id, losses: dataArray[index].losses + 1 })
                    }
                })
            })
            .then(() => {
                const playerToUpdate = players.map(player => {
                    return PlayerApi.updatePlayer(player)
                })
                return Promise.all(playerToUpdate).then(() => {
                    playersUpdate.forEach((pu, index) => {
                        players.forEach(p => {
                            if (p.id === pu.id)
                                playersUpdate[index] = { ...p }
                        })
                    })
                    setPlayerListTemp(playersUpdate)
                    setplayerListSearch(playersUpdate)
                })
            })
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
                    setScore={setScore}
                />
            }
            <PlayerList
                playerList={playerListSearch}
                setScore={setScore}
            />
        </>
    )
}

export default Board;