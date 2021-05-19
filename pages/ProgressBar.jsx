import React from 'react';

export default function ProgressBar({cardPosition, lengthOfData}) {
    return (
        <div className="progress-bar">
            <div className="progress" style={{width: `${cardPosition/lengthOfData *100}%`}} ></div>
        </div>
    )
}