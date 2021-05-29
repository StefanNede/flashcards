import React, {useEffect, useState} from 'react'
import Link from "next/link";
import Flashcard from "./Flashcard";
const axios = require('axios');
const endpoint = "https://fiverr1.stefannede.repl.co/all";

export default function topic1() {
    const [cardPosition, setCardPosition] = useState(0);
    const [data, setData] = useState("");
    function shuffleDeck(array) {
        array = array.sort(() => Math.random() - 0.5)
        return array
    }
    useEffect(() => {
        axios.get(endpoint)
        .then(function (response) {
            // get data
            // shuffle data using shuffling algorithm
            shuffleDeck(response.data.data);
            setData(response.data.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }, [])
    return (
        <div style={{display: 'flex',height:'90vh', flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
            <div className="title-part">
                <Link href="/">
                    <button className="exit">exit</button>
                </Link>
                <h3 className="title">All flashcards</h3>
                <button className="option-button shuffle-button" onClick = {() => location.reload()}>shuffle</button>
            </div>
            {data!== "" ? <Flashcard frontImage={data[cardPosition].frontImage} backImage={data[cardPosition].backImage} lengthOfData = {data.length} front={data[cardPosition].front} back={data[cardPosition].back} cardPosition = {cardPosition} setCardPosition = {setCardPosition} /> : <p>Loading... (deck might be empty)</p>}
        </div>
    )
}