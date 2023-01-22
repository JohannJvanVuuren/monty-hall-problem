import '../scss/main.css';
import noTreasure from '../scss/images/no-treasure.jpg'
import potOfGold from '../scss/images/goldpot.jpg';


const Door = ({isActive, onShow, revealTreasure, doorId, isSelected, onSelect}) => {

    /* Using the prop isActive to decide which door to open. */
    const doorOpen = isActive ? "door-closed open" : "door-closed";
    const doorKnob = isSelected ? "door-knob selected" : "door-knob";


    return (
        <div className={"door"}>

            {/* Ternary operator using doorId and revealTreasure props to determine which image to display
            (win or lose) */}
            {doorId === revealTreasure ? (
                <img className={"image-win show-image"} src={potOfGold} alt={"Pot of gold"} />
            ) : (
                <img className={"image-lose show-image"} src={noTreasure} alt={"No treasure red cross"} />
            )}

            <div className={doorOpen} onClick={onSelect} onDoubleClick={onShow}>
                <div className={doorKnob} ></div>
            </div>

        </div>
    )
}

export default Door;