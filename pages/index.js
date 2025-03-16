import Head from "next/head";
import dynamic from "next/dynamic";
import 'source-map-support/register';

const HomePageLayout = dynamic(() => import('../Layouts/Layout.Home'));

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta
          name="title"
          content="Uma Ajay Kumar Reddy P S | Full Stack Developer & Blockchain Expert"
        />
        <meta
          name="description"
          content="Hello there, I am Uma Ajay Kumar Reddy P S, a full-stack developer and blockchain expert who delivers high-performance web applications and AI-powered solutions. I specialize in MERN, MEAN, and MENN stacks along with expertise in Solidity, Rust, and cloud technologies."
        />
        <meta
          name="keywords"
          content="Uma Ajay Kumar Reddy P S, Uma Ajay, web development, blockchain, MERN, MEAN, MENN, AI, Python, Solidity, NFT, cloud computing, freelancer, startup founder"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Uma Ajay Kumar Reddy P S" />
        <meta property="og:locale" content="en-US" />

        {/* Primary Meta Tags */}
        <title>Uma Ajay Kumar Reddy P S | Full Stack Developer & Blockchain Expert</title>
        <meta
          name="title"
          content="Uma Ajay Kumar Reddy P S | Full Stack Developer & Blockchain Expert"
        />
        <meta
          name="description"
          content="Hello there, I am Uma Ajay Kumar Reddy P S, a full-stack developer and blockchain expert who delivers high-performance web applications and AI-powered solutions. I specialize in MERN, MEAN, and MENN stacks along with expertise in Solidity, Rust, and cloud technologies."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://umaajay.netlify.app/" />
        <meta
          property="og:title"
          content="Uma Ajay Kumar Reddy P S | Full Stack Developer & Blockchain Expert"
        />
        <meta
          property="og:description"
          content="Hello there, I am Uma Ajay Kumar Reddy P S, a full-stack developer and blockchain expert who delivers high-performance web applications and AI-powered solutions. I specialize in MERN, MEAN, and MENN stacks along with expertise in Solidity, Rust, and cloud technologies."
        />
        <meta property="og:image" content="meta-umaajay.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://umaajay.netlify.app/" />
        <meta
          property="twitter:title"
          content="Uma Ajay Kumar Reddy P S | Full Stack Developer & Blockchain Expert"
        />
        <meta
          property="twitter:description"
          content="Hello there, I am Uma Ajay Kumar Reddy P S, a full-stack developer and blockchain expert who delivers high-performance web applications and AI-powered solutions. I specialize in MERN, MEAN, and MENN stacks along with expertise in Solidity, Rust, and cloud technologies."
        />
        <meta property="twitter:image" content="meta-umaajay.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
      </Head>

      <main>
        <HomePageLayout />
      </main>
    </>
  );
}
