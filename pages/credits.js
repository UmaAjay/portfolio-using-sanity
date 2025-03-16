import React from "react";
import Head from "next/head";

/* Layout */
import CreditPageLayout from "../Layouts/Layout.Credits";

const Credits = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content="Acknowledgments and Gratitude" />
        <meta
          name="description"
          content="I would like to extend my sincere gratitude to all the designers, developers, and contributors whose work has inspired and supported this project. All Vectors, SVGs, Icons, and resources used in this website belong to their rightful owners."
        />
        <meta
          name="keywords"
          content="Uma Ajay Kumar Reddy P S, Uma Ajay, web development, blockchain, AI, full-stack development, MERN, MEAN, MENN, software engineering, credits, acknowledgments"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Uma Ajay Kumar Reddy P S" />
        <meta property="og:locale" content="en-US" />

        {/* Primary Meta Tags */}
        <title>Acknowledgments and Gratitude</title>
        <meta name="title" content="Acknowledgments and Gratitude" />
        <meta
          name="description"
          content="I would like to extend my sincere gratitude to all the designers, developers, and contributors whose work has inspired and supported this project. All Vectors, SVGs, Icons, and resources used in this website belong to their rightful owners."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://umaajay.netlify.app/credits/" />
        <meta property="og:title" content="Acknowledgments and Gratitude" />
        <meta
          property="og:description"
          content="I would like to extend my sincere gratitude to all the designers, developers, and contributors whose work has inspired and supported this project. All Vectors, SVGs, Icons, and resources used in this website belong to their rightful owners."
        />
        <meta property="og:image" content="meta-umaajay.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://umaajay.netlify.app/credits/" />
        <meta property="twitter:title" content="Acknowledgments and Gratitude" />
        <meta
          property="twitter:description"
          content="I would like to extend my sincere gratitude to all the designers, developers, and contributors whose work has inspired and supported this project. All Vectors, SVGs, Icons, and resources used in this website belong to their rightful owners."
        />
        <meta property="twitter:image" content="meta-umaajay.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>Acknowledgments and Gratitude</title>
      </Head>
      <main>
        <CreditPageLayout />
      </main>
    </>
  );
};

export default Credits;
