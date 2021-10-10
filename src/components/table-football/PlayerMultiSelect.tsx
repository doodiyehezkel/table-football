import { FC } from "react";
import { MultiSelect } from "react-multi-select-component";
import { PlayerModel } from "../../models/player";
import classes from "./PlayerMultiSelect.module.css"

const PlayerMultiSelect: FC<{
    playerList: PlayerModel[],
    headerText: string,
    setSelected: React.Dispatch<React.SetStateAction<{ label: string; value: string; }[]>>,
    selected: { label: string, value: string }[]
}> = (props) => {

    return (
        <div className={classes.multi_select}>
            <h3>{props.headerText}</h3>
            <MultiSelect
                options={props.playerList.map(player => {
                    return { label: player.name, value: player.id }
                })}
                value={props.selected}
                onChange={props.setSelected}
                labelledBy="Select"
            />
        </div>

    )
}

export default PlayerMultiSelect
