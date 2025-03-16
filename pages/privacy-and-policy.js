import React from "react";
import Head from "next/head";

/* Layout */
import { PrivacyPolicyLayout } from "../Layouts";

const PrivacyPolicy = ({
  handleLoading
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content="Privacy Policy | Uma Ajay Kumar Reddy P S" />
        <meta
          name="description"
          content="Privacy policy for umaajay.netlify.app. Learn how your data is collected, stored, and protected in compliance with industry standards."
        />
        <meta
          name="keywords"
          content="Uma Ajay Kumar Reddy P S, Uma Ajay, privacy policy, data protection, web development, blockchain, AI, software security"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Uma Ajay Kumar Reddy P S" />
        <meta property="og:locale" content="en-US" />

        {/* Primary Meta Tags */}
        <title>Privacy Policy</title>
        <meta name="title" content="Privacy Policy" />
        <meta
          name="description"
          content="Privacy policy for umaajay.netlify.app. Learn how your data is collected, stored, and protected in compliance with industry standards."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://umaajay.netlify.app/privacy-policy/" />
        <meta property="og:title" content="Privacy Policy" />
        <meta
          property="og:description"
          content="Privacy policy for umaajay.netlify.app. Learn how your data is collected, stored, and protected in compliance with industry standards."
        />
        <meta property="og:image" content="meta-umaajay.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://umaajay.netlify.app/privacy-policy/" />
        <meta property="twitter:title" content="Privacy Policy" />
        <meta
          property="twitter:description"
          content="Privacy policy for umaajay.netlify.app. Learn how your data is collected, stored, and protected in compliance with industry standards."
        />
        <meta property="twitter:image" content="meta-umaajay.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>Privacy Policy</title>
      </Head>
      <main>
        <PrivacyPolicyLayout/>
      </main>
    </>
  );
};

export default PrivacyPolicy;