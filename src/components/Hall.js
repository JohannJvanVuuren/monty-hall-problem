import { useState } from 'react';
import Door from "./Door";

import '../scss/main.css';
const Hall = () => {

    // const [treasure, setTreasure] = useState(false);

    //Generates random numbers between 1 and 3 (incl) to determine where the treasure will be hidden
    // const generateRandomNumber = () => {
    //     return (Math.random() * 3) + 1;
    // }


    return (
        <div className={"hall"}>
            <Door />
            <Door />
            <Door />
        </div>
    )

}

export default Hall;