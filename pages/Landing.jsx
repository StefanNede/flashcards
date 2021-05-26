import React from 'react';
import Link from 'next/Link';

export default function Landing() {
    return (
        <div className="landing">
            <h1 className="landing-title">Flashcards</h1>
            <div className="all-selection">
                <Link href="/all">
                    <button className="topic-button">All flashcards</button>
                </Link>
            </div>
            <div className="topics">
                <div className="sub-section-1">
                    <Link href="/topic1">
                        <button className="topic-button">Oral nutrition</button>
                    </Link>
                    <Link href="/topic2">
                        <button className="topic-button">Enteral nutrition</button>
                    </Link>
                </div>
                <div className="sub-section-2">
                    <Link href="/topic3">
                        <button className="topic-button">Parenteral nutrition</button>
                    </Link>
                    <Link href="/topic4">
                        <button className="topic-button">Malnutrition</button>
                    </Link>
                </div>
                <div className="sub-section-3">
                    <Link href="/topic5">
                        <button className="topic-button">Introduction to clinical nutrition</button>
                    </Link>
                    <Link href="/topic6">
                        <button className="topic-button">Review of disease entities requiring nutritional intervention</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}