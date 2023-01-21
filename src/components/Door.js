import '../scss/main.css';
import noTreasure from '../scss/images/no-treasure.jpg'
import potOfGold from '../scss/images/goldpot.jpg';


const Door = ({isActive, onShow, revealTreasure, doorId}) => {

    const doorOpen = isActive ? "door-closed open" : "door-closed";



    return (
        <div className={"door"}>


            {doorId === revealTreasure ? (
                <img className={"image-win show-image"} src={potOfGold} alt={"Pot of gold"} />
            ) : (
                <img className={"image-lose show-image"} src={noTreasure} alt={"No treasure red cross"} />
            )}
            <div className={doorOpen} onClick={onShow}>
                <div className={"door-knob"} ></div>
            </div>

        </div>
    )
}

export default Door;