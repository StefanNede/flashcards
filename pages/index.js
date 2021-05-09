import React from 'react';
import Head from "next/Head";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Landing />
      <Footer />
    </div>
  )
}
