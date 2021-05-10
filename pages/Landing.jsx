import React from 'react';
import Link from 'next/Link';


export default function Landing() {
    return (
        <div className="landing">
            <h1 style={{marginTop: 20}}>Flashcards</h1>
            <Link href="/topic1">
                <button>topic 1</button>
            </Link>
            <Link href="/topic2">
                <button>topic 2</button>
            </Link>
            <Link href="/topic3">
                <button>topic 3</button>
            </Link>
            <Link href="/topic4">
                <button>topic 4</button>
            </Link>
            <Link href="/topic5">
                <button>topic 5</button>
            </Link>
            <Link href="/topic6">
                <button>topic 6</button>
            </Link>
        </div>
    )
}