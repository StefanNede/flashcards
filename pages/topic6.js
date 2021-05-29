import React, {useState, useEffect} from 'react'
import Link from "next/link"
import Flashcard from "./Flashcard"
const axios = require('axios');
const endpoint = "https://fiverr1.stefannede.repl.co/set6";

export default function topic4() {
    const [cardPosition, setCardPosition] = useState(0);
    const [data, setData] = useState("");
    function shuffleDeck(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    useEffect(() => {
        axios.get(endpoint)
        .then(function (response) {
            // get data
            // shuffle data using shuffling algorithm
            shuffleDeck(response.data.data);
            setData(JSON.stringify(response.data));
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
                <h3 className="title">Review of disease entities requiring nutritional intervention</h3>
                <button className="option-button shuffle-button" onClick = {() => location.reload()}>shuffle</button>
            </div>
            {data!== "" ? <Flashcard frontImage={JSON.parse(data).data[cardPosition].frontImage} backImage={JSON.parse(data).data[cardPosition].backImage} lengthOfData = {JSON.parse(data).data.length} front={JSON.parse(data).data[cardPosition].front} back={JSON.parse(data).data[cardPosition].back} cardPosition = {cardPosition} setCardPosition = {setCardPosition} /> : <p>Loading... (deck might be empty)</p>}
        </div>
    )
}