import React from "react";
import Head from "next/head";

/* Layout */
import ServicesPageLayout from "../Layouts/Layout.Services";

const Services = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content="Services | Technologies and Expertise I Offer" />
        <meta
          name="description"
          content="As a full-stack developer and blockchain expert, I provide cutting-edge solutions in web development, AI, and cloud computing. My expertise spans MERN, MEAN, MENN stacks, Solidity, and scalable cloud architecture to help businesses achieve digital transformation."
        />
        <meta
          name="keywords"
          content="Uma Ajay Kumar Reddy P S, Uma Ajay, full-stack developer, blockchain developer, AI, MERN, MEAN, MENN, software engineering, cloud computing, smart contracts, web development"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Uma Ajay Kumar Reddy P S" />
        <meta property="og:locale" content="en-US" />

        {/* Primary Meta Tags */}
        <title>Services | Technologies and Expertise I Offer</title>
        <meta name="title" content="Services | Technologies and Expertise I Offer" />
        <meta
          name="description"
          content="As a full-stack developer and blockchain expert, I provide cutting-edge solutions in web development, AI, and cloud computing. My expertise spans MERN, MEAN, MENN stacks, Solidity, and scalable cloud architecture to help businesses achieve digital transformation."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://umaajay.netlify.app/services/" />
        <meta property="og:title" content="Services | Technologies and Expertise I Offer" />
        <meta
          property="og:description"
          content="As a full-stack developer and blockchain expert, I provide cutting-edge solutions in web development, AI, and cloud computing. My expertise spans MERN, MEAN, MENN stacks, Solidity, and scalable cloud architecture to help businesses achieve digital transformation."
        />
        <meta property="og:image" content="meta-umaajay.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://umaajay.netlify.app/services/" />
        <meta property="twitter:title" content="Services | Technologies and Expertise I Offer" />
        <meta
          property="twitter:description"
          content="As a full-stack developer and blockchain expert, I provide cutting-edge solutions in web development, AI, and cloud computing. My expertise spans MERN, MEAN, MENN stacks, Solidity, and scalable cloud architecture to help businesses achieve digital transformation."
        />
        <meta property="twitter:image" content="meta-umaajay.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>Services | Technologies and Expertise I Offer</title>
      </Head>
      <main>
        <ServicesPageLayout />
      </main>
    </>
  );
};

export default Services;
