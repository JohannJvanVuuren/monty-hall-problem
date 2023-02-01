import {useState} from "react";
import { Hall } from "./components/Hall";

import './scss/main.css';

/* Primary Stateful component. */
export const App = () => {

    /*
    * This state was implemented on the parent component to make sure that the treasure isn't reallocated
    * everytime the other components are re-rendered
    *
    */
    const [winningDoor, setWinningDoor] = useState(Math.floor(Math.random() * 3) + 1)

    return (
        <div>
            {/* The above state is passed to the child component <Hall/> as props where it is
             needed to identify where the treasure is and also to reset the game. */}
            <Hall
                winningDoor={winningDoor}
                setWinningDoor={() => setWinningDoor(Math.floor(Math.random() * 3) + 1)}
            />
        </div>
    );
}

