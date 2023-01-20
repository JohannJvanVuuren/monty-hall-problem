import '../scss/main.css';
// import noTreasure from '../scss/images/no-treasure.jpg'
import potOfGold from '../scss/images/goldpot.jpg';


const Door = ({isActive, onShow, revealTreasure}) => {

    const doorOpen = isActive ? "door-closed open" : "door-closed";


    return (
        <div className={"door"}>

            <img className={"image-win"} src={potOfGold} alt={"Pot of gold"}/>
            <div className={doorOpen} onClick={onShow}>
                <div className={"door-knob"} ></div>
            </div>

        </div>
    )
}

export default Door;