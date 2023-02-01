/* Import of the two images that are displayed behind the doors to indicate the presence of a treasure. */
import noTreasure from '../scss/images/vecteezy_tick-and-cross-clipart-design-illustration_9342191_241.png'
import potOfGold from '../scss/images/goldpot.png';

/* Import of main css file compiled from SCSS main.scss */
import '../scss/main.css';

/* Stateless controlled child component. All information is passed as props from the parent <Hall /> component. */
export const Door = ({selectedDoor, doorId, treasureDoor, onSelect, showLosingDoor, evaluateWin}) => {

    /*
    * This variable and if/else statement is used to add and remove the "selected" class from the door knob, which
    * turns the colour of the knob green when the door is selected.
    */
    let doorKnob;
    if (selectedDoor === doorId) {
        doorKnob = "door-knob selected";
    } else {
        doorKnob = "door-knob";
    }

    /*
    * This variable and if/else statement controls the "open" class which determines whether a door is open or
    * closed
    */
    let doorOpen;
    if ( evaluateWin !== null || (showLosingDoor === doorId && selectedDoor !== null)) {
        doorOpen = "door-closed open ";
    } else {
        doorOpen = "door-closed ";
    }

    return (
        <div className={"door"}>

            {/* Ternary operator using doorId and revealTreasure props to determine which image to display
            (win or lose) */}
            {doorId === treasureDoor ? (
                <img className={"image-win show-image"} src={potOfGold} alt={"Pot of gold"} />
            ) : (
                <img className={"image-lose show-image"} src={noTreasure} alt={"No treasure red cross"} />
            )}
            {/* The final div is the actual door and the door knob inside that. The event is for the user's first
             choice of winning door which will turn the knob green to indicate that it was selected. */}
            <div className={doorOpen} onClick={onSelect}>
                <div className={doorKnob} ></div>
            </div>

        </div>
    )
}

