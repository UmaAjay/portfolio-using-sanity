import React from "react";
import Head from "next/head";

/* Layout */
import { AboutPageLayout } from "../Layouts";

const About = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content="About Uma Ajay Kumar Reddy P S | Who am I?" />
        <meta
          name="description"
          content="I am a passionate full-stack developer and blockchain expert from India. I specialize in web development, AI-driven solutions, and blockchain technology. My goal is to build innovative, scalable, and impactful applications that solve real-world problems."
        />
        <meta
          name="keywords"
          content="Uma Ajay Kumar Reddy P S, Uma Ajay, web development, blockchain, full-stack developer, MERN, MEAN, MENN, AI, coding, software engineering, freelance, cloud computing"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Uma Ajay Kumar Reddy P S" />
        <meta property="og:locale" content="en-US" />

        {/* Primary Meta Tags */}
        <title>About Uma Ajay Kumar Reddy P S | Who am I?</title>
        <meta name="title" content="About Uma Ajay Kumar Reddy P S | Who am I?" />
        <meta
          name="description"
          content="I am a passionate full-stack developer and blockchain expert from India. I specialize in web development, AI-driven solutions, and blockchain technology. My goal is to build innovative, scalable, and impactful applications that solve real-world problems."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://umaajay.netlify.app/about" />
        <meta property="og:title" content="About Uma Ajay Kumar Reddy P S | Who am I?" />
        <meta
          property="og:description"
          content="I am a passionate full-stack developer and blockchain expert from India. I specialize in web development, AI-driven solutions, and blockchain technology. My goal is to build innovative, scalable, and impactful applications that solve real-world problems."
        />
        <meta property="og:image" content="meta-umaajay.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://umaajay.netlify.app/about" />
        <meta property="twitter:title" content="About Uma Ajay Kumar Reddy P S | Who am I?" />
        <meta
          property="twitter:description"
          content="I am a passionate full-stack developer and blockchain expert from India. I specialize in web development, AI-driven solutions, and blockchain technology. My goal is to build innovative, scalable, and impactful applications that solve real-world problems."
        />
        <meta property="twitter:image" content="meta-umaajay.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>About Uma Ajay Kumar Reddy P S | Who am I?</title>
      </Head>
      <main>
        <AboutPageLayout />
      </main>
    </>
  );
};

export default About;
