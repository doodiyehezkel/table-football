import { FC ,useState } from "react";
import { PlayerModel } from "../../models/player";
import PlayerMultiSelect from "./PlayerMultiSelect";
import classes from "./GameScoreManagement.module.css"

const GameScoreManagement:FC<{playerList: PlayerModel[] ,setScore:Function}> = (props) => {
    
    const [winnersGroup ,setWinnersGroup] = useState<{ label: string, value: string }[]>([]);
    const [losersGroup ,setLosersGroup] = useState<{ label: string, value: string }[]>([]);
    const [isPlayersUpdate, setIsPlayersUpdate] = useState(false);

    const onClick = () => {
        setIsPlayersUpdate(true)
        const winnersIds = winnersGroup.map(winner => {return {id:winner.value ,loseOrWin:true}});
        const lossersIds = losersGroup.map(lossers => {return {id:lossers.value ,loseOrWin:false}});
        const groupIds = winnersIds.concat(lossersIds);
        props.setScore(groupIds).finally(()=>setIsPlayersUpdate(false))
    }


    return (
        <div className={classes.game_score_container}>
            <PlayerMultiSelect playerList={props.playerList} selected={winnersGroup} setSelected={setWinnersGroup}  headerText={"Winners"}/>
            <div className={`${classes.game_set} ${isPlayersUpdate && classes.game_set_disable }`}>
                 <button disabled={isPlayersUpdate} onClick={onClick}> Set Score </button>
            </div>
            <PlayerMultiSelect playerList={props.playerList} selected={losersGroup} setSelected={setLosersGroup} headerText={"Losers"}/>
        </div>
    )
}

export default GameScoreManagement;