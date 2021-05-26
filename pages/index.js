import React from 'react';
import Head from "next/head";
import Landing from "./Landing";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flashcards</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Landing />
      <Footer />
    </div>
  )
}
