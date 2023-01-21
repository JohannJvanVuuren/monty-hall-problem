import { useState } from 'react';
import Door from "./Door";

import '../scss/main.css';
const Hall = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    // const [treasure, setTreasure] = useState(false);

    //Generates random numbers between 1 and 3 (incl) to determine where the treasure will be hidden
    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 3) + 1;
    }

    let treasureDoor = generateRandomNumber();


    return (
        <div className={"hall"}>
            <Door
                doorId={1}
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
                revealTreasure={treasureDoor}
            />
            <Door
                doorId={2}
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
                revealTreasure={treasureDoor}
            />
            <Door
                doorId={3}
                isActive={activeIndex === 2}
                onShow={() => setActiveIndex(2)}
                revealTreasure={treasureDoor}
            />
        </div>
    )

}

export default Hall;