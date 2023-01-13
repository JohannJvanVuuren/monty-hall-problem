import {useState} from 'react';
import '../scss/main.css';
import Door from "./Door";

const Hall = () => {

    return (
        <div>
            <Door/>
            <Door/>
            <Door/>
        </div>
    )

}

export default Hall;