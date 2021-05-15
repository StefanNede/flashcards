import React from 'react'
import Link from "next/Link"
import Flashcard from "./Flashcard"

export default function topic1() {
    return (
        <div style={{display: 'flex',height:'90vh', flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
            <div className="title-part">
                <Link href="/">
                    <button className="exit">exit</button>
                </Link>
                <h3 className="title">Review of disease entities requiring nutritional intervention</h3>
            </div>
            <Flashcard />
        </div>
    )
}