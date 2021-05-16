import React, {useEffect, useState} from 'react'
import Link from "next/Link"
import Flashcard from "./Flashcard";
const axios = require('axios')

export default function topic1() {
    const [cardPosition, setCardPosition] = useState(0);
    const [data, setData] = useState("");
    useEffect(() => {
        axios.get('http://localhost:3001/set1')
        .then(function (response) {
            // get data
            setData(JSON.stringify(response.data));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }, [])
    // if (data !== "") {
    //     console.log(JSON.parse(data))
    // }
    return (
        <div style={{display: 'flex',height:'90vh', flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
            <div className="title-part">
                <Link href="/">
                    <button className="exit">exit</button>
                </Link>
                <h3 className="title">Oral nutrition</h3>
            </div>
            {data!== "" ? <Flashcard lengthOfData = {JSON.parse(data).data.length} front={JSON.parse(data).data[cardPosition].front} back={JSON.parse(data).data[cardPosition].back} cardPosition = {cardPosition} setCardPosition = {setCardPosition} /> : <p>Loading...</p>}
        </div>
    )
}