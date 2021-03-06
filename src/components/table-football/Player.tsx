
import { FC, useState } from "react";
import { PlayerModel } from "../../models/player";
import classes from "./Player.module.css"

import { AiFillLike, AiTwotoneDislike } from "react-icons/ai";

const Player: FC<{player:PlayerModel ,setScore:Function}> = ({ player,setScore}) => {
    
    const [isPlayerUpdate, setIsPlayerUpdate] = useState(false);

    const onClickVictories = () => {
        setIsPlayerUpdate(true)
        setScore([{id:player.id,loseOrWin:true}])
        .finally(()=>setIsPlayerUpdate(false))
    }

    const onClickLosses = () => {
        setIsPlayerUpdate(true)
        setScore([{id:player.id,loseOrWin:false}])
        .finally(()=>setIsPlayerUpdate(false))
    }


    return (

        <div className={classes.player_card}>
            <div className={classes.player_card_img}>
                <img  src={player.img} alt="player img" />
            </div>
            <div className={classes.container}>
                <h2 className={classes.player_name}><b>{player.name}</b></h2>
                <div className={`${classes.player_button} ${isPlayerUpdate && classes.player_button_disable}`}>
                    <button disabled={isPlayerUpdate} onClick={onClickVictories}><AiFillLike /></button>
                    <button disabled={isPlayerUpdate} onClick={onClickLosses}><AiTwotoneDislike /></button>
                </div>
                <p>Victories : {player.victories}</p>
                <p>Losses : {player.losses}</p>
                <p>Total games : {player.victories + player.losses}</p>
            </div>
        </div>
    )
}

export default Player;