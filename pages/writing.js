import React from "react";
import Head from "next/head";

/* Layout */
import { WritingPageLayout } from "../Layouts";
import AdsComponent from "../components/AdsComponent/AdsComponent";

const Writing = ({ handleLoading }) => {
  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-2340030299315656" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content="Writing | Uma Ajay's Insights" />
        <meta
          name="description"
          content="Explore articles on full-stack development, blockchain, AI, and industry insights. I am passionate about sharing knowledge, solving real-world problems, and contributing to the developer community."
        />
        <meta
          name="keywords"
          content="Uma Ajay Kumar Reddy P S, Uma Ajay, full-stack development, blockchain, AI, MERN, MEAN, MENN, coding, programming, software engineering, tech insights"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Uma Ajay Kumar Reddy P S" />
        <meta property="og:locale" content="en-US" />

        {/* Primary Meta Tags */}
        <title>Writing | Uma Ajay's Insights</title>
        <meta name="title" content="Writing | Uma Ajay's Insights" />
        <meta
          name="description"
          content="Explore articles on full-stack development, blockchain, AI, and industry insights. I am passionate about sharing knowledge, solving real-world problems, and contributing to the developer community."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://umaajay.netlify.app/writing/" />
        <meta property="og:title" content="Writing | Uma Ajay's Insights" />
        <meta
          property="og:description"
          content="Explore articles on full-stack development, blockchain, AI, and industry insights. I am passionate about sharing knowledge, solving real-world problems, and contributing to the developer community."
        />
        <meta property="og:image" content="meta-umaajay.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://umaajay.netlify.app/writing/"
        />
        <meta
          property="twitter:title"
          content="Writing | Uma Ajay's Insights"
        />
        <meta
          property="twitter:description"
          content="Explore articles on full-stack development, blockchain, AI, and industry insights. I am passionate about sharing knowledge, solving real-world problems, and contributing to the developer community."
        />
        <meta property="twitter:image" content="meta-umaajay.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>Writing | Uma Ajay's Insights</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2340030299315656"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <main>
        <WritingPageLayout handleLoading={handleLoading} />
      </main>
      <AdsComponent isDisplay={true} slotId={"3655775912"} />
    </>
  );
};

export default Writing;
