import '../scss/main.css';





const Door = ({doorId}) => {

    const additionalClass = "";
    const doorClosed = `door-closed + ${additionalClass}`;

    const onClickHandler = () => {
        doorClosed.classList.add("open");
    }

    return (
        <div className={"door"}>
            <div className={doorClosed} onClick={onClickHandler}>
                <div className={"door-knob"}></div>
                <div className={"door-open"}>
                    <div>
                        {}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Door;