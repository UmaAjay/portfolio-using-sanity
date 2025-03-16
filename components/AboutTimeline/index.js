import React from "react";

import SRG2 from "../common/SRG2";

const AboutTimeline = () => {
  return (
    <section className="about-timeline">
      <h1 className="title_text center_text">My Journey</h1>
      <div className="container">
        <div>
          {/* For Mobile */}
          <div className="about-timeline--content hide_on_desktop">
            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>
              <SRG2>
                <div className="description">
                  <h1 className="ht_text">2015-2017</h1>
                  <p>Early Interest in Technology</p>
                  <ul>
                    <li>Started learning programming with C and Java</li>
                    <li>Participated in coding competitions and workshops</li>
                  </ul>
                </div>
              </SRG2>
            </div>

            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>
              <SRG2>
                <div className="description">
                  <h1 className="ht_text">2018-2019</h1>
                  <p>Introduction to Full-Stack Development</p>
                  <ul>
                    <li>Developed web applications using MERN stack</li>
                    <li>Gained experience in UI/UX design and REST APIs</li>
                  </ul>
                </div>
              </SRG2>
            </div>

            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>
              <SRG2>
                <div className="description">
                  <h1 className="ht_text">2020</h1>
                  <p>Expanding into Blockchain and AI</p>
                  <ul>
                    <li>Started working with Solidity and smart contracts</li>
                    <li>Built AI-powered automation solutions</li>
                  </ul>
                </div>
              </SRG2>
            </div>

            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>
              <SRG2>
                <div className="description">
                  <h1 className="ht_text">2021</h1>
                  <p>Industry Experience and Professional Growth</p>
                  <ul>
                    <li>Worked on enterprise-level fintech and blockchain applications</li>
                    <li>Gained expertise in cloud computing and microservices</li>
                  </ul>
                </div>
              </SRG2>
            </div>

            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>
              <SRG2>
                <div className="description">
                  <h1 className="ht_text">2022</h1>
                  <p>Advanced Research and Leadership</p>
                  <ul>
                    <li>Led development teams in blockchain and AI projects</li>
                    <li>Published research on decentralized applications</li>
                  </ul>
                </div>
              </SRG2>
            </div>

            <div className="item">
              <div className="point hide_on_desktop">
                <div className="animate-ping"></div>
                <span></span>
              </div>
              <SRG2>
                <div className="description">
                  <h1 className="ht_text">2023-Present</h1>
                  <p>Innovating and Scaling Up</p>
                  <ul>
                    <li>Developing next-gen AI-driven blockchain solutions</li>
                    <li>Expanding fintech and decentralized finance projects</li>
                  </ul>
                </div>
              </SRG2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;