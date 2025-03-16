import React from "react";
import Image from "next/image";

/* Images */
import HeroImage from "../../assets/aboutHero.webp";

const AboutHero = () => {
  return (
    <section className="about_hero">
      <div className="container_sm">
        <div className="about_hero--wrapper">
          <div className="about_hero--content">
            <div className="wrapper">
              <p className="intro">
                I am <span className="ht_text">Uma Ajay Kumar Reddy P S</span>, a passionate full-stack developer and blockchain expert with extensive experience in web development, AI, and cloud solutions. I specialize in building high-performance applications that solve real-world problems.
              </p>
              <h1 className="">
                Transforming <span className="ht_text">ideas into reality.</span>
              </h1>
              <p className="description">
                Since launching my journey in technology, I have been committed to developing robust applications using MERN, MEAN, and MENN stacks, along with blockchain technologies like Solidity and Solana. My goal is to create impactful digital experiences.
              </p>
            </div>
          </div>

          <div className="about_hero--image">
            <Image src={HeroImage} width={'auto'} quality={100} alt="Uma Ajay Kumar Reddy P S at work" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
