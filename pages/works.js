import React from "react";
import Head from "next/head";

/* Layout */
import { WorkPageLayout } from "../Layouts";

const Work = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content="Projects | My Work Portfolio" />
        <meta
          name="description"
          content="Explore my portfolio of full-stack development, blockchain applications, and AI-driven solutions. I specialize in building high-performance, scalable applications with the latest technologies such as MERN, MEAN, and MENN stacks, along with Solidity and AI-driven automation."
        />
        <meta
          name="keywords"
          content="Uma Ajay Kumar Reddy P S, Uma Ajay, full-stack development, blockchain, AI, MERN, MEAN, MENN, Solidity, web development, software engineering, cloud computing"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Uma Ajay Kumar Reddy P S" />
        <meta property="og:locale" content="en-US" />

        {/* Primary Meta Tags */}
        <title>Projects | My Work Portfolio</title>
        <meta name="title" content="Projects | My Work Portfolio" />
        <meta
          name="description"
          content="Explore my portfolio of full-stack development, blockchain applications, and AI-driven solutions. I specialize in building high-performance, scalable applications with the latest technologies such as MERN, MEAN, and MENN stacks, along with Solidity and AI-driven automation."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://umaajay.netlify.app/projects" />
        <meta property="og:title" content="Projects | My Work Portfolio" />
        <meta
          property="og:description"
          content="Explore my portfolio of full-stack development, blockchain applications, and AI-driven solutions. I specialize in building high-performance, scalable applications with the latest technologies such as MERN, MEAN, and MENN stacks, along with Solidity and AI-driven automation."
        />
        <meta property="og:image" content="meta-umaajay.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://umaajay.netlify.app/projects" />
        <meta property="twitter:title" content="Projects | My Work Portfolio" />
        <meta
          property="twitter:description"
          content="Explore my portfolio of full-stack development, blockchain applications, and AI-driven solutions. I specialize in building high-performance, scalable applications with the latest technologies such as MERN, MEAN, and MENN stacks, along with Solidity and AI-driven automation."
        />
        <meta property="twitter:image" content="meta-umaajay.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>Projects | My Work Portfolio</title>
      </Head>
      <main>
        <WorkPageLayout />
      </main>
    </>
  );
};

export default Work;