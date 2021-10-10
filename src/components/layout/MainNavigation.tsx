import { FC } from "react"
import { Link } from "react-router-dom"

import classes from "./MainNavigation.module.css"

const MainNavigation: FC = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Table Football</div>
            <ul>
                <li>
                    <Link to="/"> Board </Link>
                </li>
                <li>
                    <Link to="/new-player"> New Player </Link>
                </li>
                <li>
                    <Link to="/game-history"> Game History </Link>
                </li>
            </ul>
        </header>
    )
}

export default MainNavigation