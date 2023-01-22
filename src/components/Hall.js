import { useState } from 'react';
import Door from "./Door";

import '../scss/main.css';
const Hall = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);

    // const [treasure, setTreasure] = useState(false);

    //Generates random numbers between 1 and 3 (incl) to determine where the treasure will be hidden
    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 3) + 1;
    }


    let treasureDoor = generateRandomNumber();

    return (
        <div className={"hall"}>
            {/* Properties set to transfer data to Door child component. doorId is to enable a way to determine
            which door has the treasure behind it. This is done by corresponding this number to the random number
            generated using generateRandomNumber(). isActive is to determine which door to open and onShow sets the
            state variable activeIndex that enables isActive. revealTreasure is used together with doorId to decide
            where the treasure image is to be displayed in the Door component.
            */}
            <Door
                doorId={1}
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
                isSelected={ selectedIndex === 1}
                onSelect={() => setSelectedIndex(1)}

                revealTreasure={treasureDoor}
            />
            <Door
                doorId={2}
                isActive={activeIndex === 2}
                onShow={() => setActiveIndex(2)}
                isSelected={ selectedIndex === 2}
                onSelect={() => setSelectedIndex(2)}
                revealTreasure={treasureDoor}
            />
            <Door
                doorId={3}
                isActive={activeIndex === 3}
                onShow={() => setActiveIndex(3)}
                isSelected={ selectedIndex === 3}
                onSelect={() => setSelectedIndex(3)}
                revealTreasure={treasureDoor}
            />
        </div>
    )

}

export default Hall;