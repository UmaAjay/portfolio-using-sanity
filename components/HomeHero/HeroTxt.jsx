import React, { useEffect } from "react";
import * as Scroll from "react-scroll";
import { useTranslation } from "next-i18next";
import {
  Github,
  Linkedin,
  Medium,
  Gmail,
  Mastodon,
} from "@icons-pack/react-simple-icons";

var scrollSpy = Scroll.scrollSpy;

const HeroTxt = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only run on the client side
      scrollSpy.update();
    }
  });

  const { t } = useTranslation();

  return (
    <>
      <div className="hero_txt">
        <div className="content">
          <p className="intro">
            Hello, I'm <span className="ht_text">Uma Ajay</span>
          </p>
          <h1 className="hero_txt--text">
            <span className="ht_text">Web3 Developer</span> & Tech Enthusiast
          </h1>
          <p className="description">
            Passionate about decentralized technology, blockchain solutions, and
            web development. Bridging the gap between technology and real-world
            applications.
          </p>
        </div>

        <div className="action_wrapper">
          <a href="#portfolio" aria-label="View Projects">
            <button
              type="button"
              className="hero_txt--btn primary_btn"
              aria-label="View Projects"
            >
              View My Work
            </button>
          </a>

          <div className="icon_banner">
            {/* GitHub */}
            <a href="https://github.com/UmaAjay" target="_blank" rel="noreferrer">
              <Github xlinkTitle="true" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/uma-ajay-kumar-reddy/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin xlinkTitle="true" />
            </a>

            {/* Medium */}
            <a href="https://medium.com/@umaajay" target="_blank" rel="noreferrer">
              <Medium xlinkTitle="true" />
            </a>

            {/* Mastodon */}
            <a href="https://mastodon.social/@UmaAjay" target="_blank" rel="noreferrer">
              <Mastodon xlinkTitle="true" />
            </a>

            {/* Email */}
            <a href="mailto:umaveena.alvas@gmail.com">
              <Gmail xlinkTitle="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroTxt;
