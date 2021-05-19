import React, {useState} from 'react';
import ProgressBar from "./ProgressBar";
export default function Flashcard( {lengthOfData, front, back ,cardPosition, setCardPosition} ) {
    const [onBack, setOnBack] = useState(false);
    const [showProgressBar, setShowProgressBar] = useState(false);
    function changeSide() {
        if (onBack) {
            setOnBack(false);
        }
        else if (!onBack) {
            setOnBack(true);
        }
    }

    function moveBack() {
        if (cardPosition === 0) {
            setCardPosition(0);
            alert("first card in deck")
        }
        else {
            setCardPosition(--cardPosition % lengthOfData);
        }
    }
    function moveForward() {
        console.log(cardPosition)
        setCardPosition(++cardPosition % lengthOfData);
    }
    return (
        <>
            {showProgressBar ? <ProgressBar cardPosition={cardPosition} lengthOfData={lengthOfData} /> : <></>}
            <button className="show-progress-bar" onClick = {() => setShowProgressBar(!showProgressBar)}>{showProgressBar ? "hide " : "show "} progress bar</button>
            <div className={onBack ? "onBack flashcard" : "flashcard"}>
                <p className={onBack ? "pOnBack" : ""}>{onBack ? back : front}</p>
            </div>
            <div className="options">
                <button className="previous option-button" onClick={moveBack}>previous</button>
                <button className="turn-over option-button" onClick={changeSide}>flip</button>
                <button className="next option-button" onClick={moveForward}>next</button>
            </div>
        </>
    )
} 