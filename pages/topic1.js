import React from 'react'
import Link from "next/Link"

export default function topic1() {
    return (
        <div style={{display: 'flex',height:'90vh', flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
            <div className="title-part">
                <Link href="/">
                    <button className="exit">exit</button>
                </Link>
                <h3 className="title">Oral nutrition</h3>
            </div>
            <div className="flashcard">question</div>
            <div className="options">
                <button className="previous option-button">previous</button>
                <button className="turn-over option-button">see back</button>
                <button className="next option-button">next</button>
            </div>
        </div>
    )
}