import {Routes, Route} from "react-router-dom";
import { Counter } from "./Counter";
import { Fetch } from "./Fetch";
import { Forms } from "./Forms";
import { Timer } from "./Timer";
import { Todo } from "./Todo";
import styles from "./Route.module.css";
import { Axios } from "./Axios";

export const Routers = () => {
    return (
        <>
        <div className={styles.Route}>
        <Routes>
            <Route path="/counter" element={<Counter/>}/>
            <Route path="/todo" element={<Todo/>}/>
            <Route path="/timer" element={<Timer/>} />
            <Route path="/forms" element={<Forms/>} />
            <Route path="/fetch" element={<Fetch/>} />
            <Route path="/axios" element={<Axios/>} />
        </Routes>
        </div>
        </>
    )
}