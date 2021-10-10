import { FC } from "react";
import { PlayerModel } from "../../models/player";
import Player from "./Player";
import classes from "./PlayerList.module.css"


const PlayerList: FC<{ playerList: PlayerModel[] ,victoriesHandler:Function ,lossesHandler:Function }> = ({ playerList,victoriesHandler,lossesHandler }) => {
    return (
        <div className={classes.player_list_container}>
            {
                playerList.map(player => {
                    return <Player
                        key={player.id}
                        player={player}
                        victoriesHandler={victoriesHandler}
                        lossesHandler={lossesHandler}
                    />
                })
            }
        </div>
    )
}

export default PlayerList;