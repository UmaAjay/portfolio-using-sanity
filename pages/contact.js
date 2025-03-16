import React from "react";
import Head from "next/head";

/* Layout */
import ContactPageLayout from "../Layouts/Layout.Contact";

const Contact = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content="Work with Uma Ajay Kumar Reddy P S" />
        <meta
          name="description"
          content="Looking for an experienced full-stack developer? I specialize in building high-performance web applications, AI solutions, and blockchain projects. Let's collaborate to bring your ideas to life! Available for freelance, remote, and project-based work."
        />
        <meta
          name="keywords"
          content="Uma Ajay Kumar Reddy P S, Uma Ajay, full-stack developer, blockchain developer, AI, MERN, MEAN, MENN, freelance developer, software engineering, web development"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Uma Ajay Kumar Reddy P S" />
        <meta property="og:locale" content="en-US" />

        {/* Primary Meta Tags */}
        <title>Work with Uma Ajay Kumar Reddy P S</title>
        <meta name="title" content="Work with Uma Ajay Kumar Reddy P S" />
        <meta
          name="description"
          content="Looking for an experienced full-stack developer? I specialize in building high-performance web applications, AI solutions, and blockchain projects. Let's collaborate to bring your ideas to life! Available for freelance, remote, and project-based work."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://umaajay.netlify.app/contact/" />
        <meta property="og:title" content="Work with Uma Ajay Kumar Reddy P S" />
        <meta
          property="og:description"
          content="Looking for an experienced full-stack developer? I specialize in building high-performance web applications, AI solutions, and blockchain projects. Let's collaborate to bring your ideas to life! Available for freelance, remote, and project-based work."
        />
        <meta property="og:image" content="meta-umaajay.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://umaajay.netlify.app/contact/"
        />
        <meta property="twitter:title" content="Work with Uma Ajay Kumar Reddy P S" />
        <meta
          property="twitter:description"
          content="Looking for an experienced full-stack developer? I specialize in building high-performance web applications, AI solutions, and blockchain projects. Let's collaborate to bring your ideas to life! Available for freelance, remote, and project-based work."
        />
        <meta property="twitter:image" content="meta-umaajay.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>Work with Uma Ajay Kumar Reddy P S</title>
      </Head>
      <main>
        <ContactPageLayout />
      </main>
    </>
  );
};

export default Contact;
