import React, {useState, useEffect} from 'react';

export default function Flashcard(props) {
    const [onBack, setOnBack] = useState(false);
    function changeSide() {
        console.log(onBack);
        if (onBack) {
            setOnBack(false);
        }
        else if (!onBack) {
            setOnBack(true);
        }
    }
    return (
        <>
            <div className={onBack ? "onBack flashcard" : "flashcard"}>
                <p className={onBack ? "pOnBack" : ""}>{onBack ? "back stuff" : "front stuff"}</p>
            </div>
            <div className="options">
                <button className="previous option-button">previous</button>
                <button className="turn-over option-button" onClick={changeSide}>flip</button>
                <button className="next option-button">next</button>
            </div>
        </>
    )
} 