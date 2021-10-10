import { FC ,useState } from "react";
import { PlayerModel } from "../../models/player";
import PlayerMultiSelect from "./PlayerMultiSelect";
import classes from "./GameScoreManagement.module.css"

const GameScoreManagement:FC<{playerList: PlayerModel[] ,victoriesHandler:Function ,lossesHandler:Function}> = (props) => {
    
    const [winnersGroup ,setWinnersGroup] = useState<{ label: string, value: string }[]>([]);
    const [losersGroup ,setLosersGroup] = useState<{ label: string, value: string }[]>([]);
    const [isPlayerUpdate, setIsPlayerUpdate] = useState(false);

    const onClick = () => {
        const winnersIds = winnersGroup.map(winner => winner.value)
        if(winnersIds.length!==0)
         props.victoriesHandler(winnersIds)//.then(() => setIsPlayerUpdate(false))

        const lossersIds = losersGroup.map(lossers => lossers.value)
        if(lossersIds.length!==0)
         props.lossesHandler(lossersIds)//.then(() => setIsPlayerUpdate(false))
    }


    return (
        <div className={classes.game_score_container}>
            <PlayerMultiSelect playerList={props.playerList} selected={winnersGroup} setSelected={setWinnersGroup}  headerText={"Winners"}/>
            <div className={classes.game_set}>
                 <button onClick={onClick}> Set Score </button>
            </div>
            <PlayerMultiSelect playerList={props.playerList} selected={losersGroup} setSelected={setLosersGroup} headerText={"Losers"}/>
        </div>
    )
}

export default GameScoreManagement;