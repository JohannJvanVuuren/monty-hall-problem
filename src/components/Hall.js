import {useState} from 'react';
import { Door } from "./Door";

/* Import of main css file compiled from SCSS main.scss */
import '../scss/main.css';

/* Secondary stateful component. */
/* Implementation of the <Hall /> component with the props from <App /> needed below. */
export const Hall = ({winningDoor, setWinningDoor}) => {

    /*
    * Implementation of the states needed in functions of this component as well as the component props that
    * needs to be passed down to the stateless child <Door /> component.
    */
    const [selectDoor, setSelectDoor] = useState(null);
    const [evaluateWin, setEvaluateWin] = useState(null);

    /* This function is used to open a losing door once the user selects their first choice of doors */
    const showLosingDoor = () => {
        let doorId;
        for (let i = 1; i <= 3; i++) {
            if (i !== winningDoor && i !== selectDoor) {
                doorId = i;
                break;
            }
        }
        return doorId;
    }

    /* Invoking the function and capturing return value as door id to pass down to <Door /> as a prop */
    const openDoor = showLosingDoor();

    /* Callback function for the onClick event on the "Switch Doors" button in the UI. */
    const switchSelectedDoor = () => {
        let newDoorId;
        for (let i = 1; i <= 3; i++) {
            if (i !== selectDoor && i !== showLosingDoor()) {
                newDoorId = i;
            }
        }
        setSelectDoor(newDoorId);
    }

    /* Callback function for the onClick event of the "See if you won" button in the UI */
    const revealSelectedDoor = () => {
        if (selectDoor === winningDoor) {
            setEvaluateWin(true)
        } else {
            setEvaluateWin(false)
        }
    }

    /*
    * Function to evaluate if the user has won and then to display an appropriate message. The logic goes hand in
    * hand with the ternary operator in the return of the component that decides which page title to display.
    */
    const endMessage = () => {
        if (evaluateWin) {
            return "You won"
        }
    }

    /* Callback function for the onClick event of the "Reset Game" button in the UI. */
    const resetGameHandler = () => {
        setSelectDoor(null);
        setEvaluateWin(null);
        setTimeout(() => setWinningDoor(), 2000);
    }

    return (
        <div>
            {/* Ternary operator used to display a winning message if the user picks a winning door */}
            {endMessage() === "You won" ? <h2>You won</h2> : <h1>Monty Hall</h1>}
            <p>Click on a door to select your choice of winning door.</p>
            <div className={"hall"}>
                {/* The three doors are rendered using the Array.prototype.map() method. All props here are
                 passed to the child <Door /> component where they are used with if/else statements to
                 place/remove CSS classes and to display the images behind the doors. */}
                {[1, 2, 3].map((doorId, index) => (
                    <Door
                        key={index}
                        doorId={doorId}
                        onSelect={() => setSelectDoor(doorId)}
                        disable={selectDoor !== null}
                        treasureDoor={winningDoor}
                        selectedDoor={selectDoor}
                        showLosingDoor={openDoor}
                        evaluateWin={evaluateWin}
                    />))
                }
            </div>
            {/* These three events are the operators of the game after the user's first selection of a
             winning door. */}
            <div className={"btn-container"}>
                <button className={"btn-secondary"} onClick={switchSelectedDoor}>Switch doors</button>
                <button className={"btn-primary"} onClick={revealSelectedDoor}>See if you won</button>
                <button className={"btn-secondary"} onClick={resetGameHandler}>Reset Game</button>
            </div>
        </div>
    )
}

