import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <>
        <div className={styles.Nav}>
        <Link to="/counter">Counter</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/timer">Timer</Link>
        <Link to="/forms">Forms</Link>
        <Link to="/fetch">Fetch</Link>
        <Link to="/axios">Axios</Link>
        </div>
        </>
    )
}