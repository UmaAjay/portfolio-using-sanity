import React from "react";

const AllCredits = () => {
  return (
    <section className="credit-section">
      <div className="credit-section--wrapper container">
        <div className="container_x_sm">
          <h1>
            All <span className="ht_text">Vectors</span>,
            <span className="ht_text">SVGs</span>,
            <span className="ht_text">Fonts</span>, and
            <span className="ht_text">Icons</span> used in this website have
            their rightful owners.
          </h1>

          <ul className="thankYou_ul">
            <li>
              Digital assets and illustrations sourced from
              <a href="https://www.freepik.com/" target="_blank" rel="noreferrer">
                Freepik
              </a>,
              <a href="https://illlustrations.co/" target="_blank" rel="noreferrer">
                Illustrations.co
              </a>, and other open-source platforms.
            </li>
            <li>
              Custom icons and vector assets created using
              <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                Figma
              </a>
              and
              <a href="https://www.adobe.com/" target="_blank" rel="noreferrer">
                Adobe Illustrator
              </a>.
            </li>
            <li>
              Fonts utilized in this project include
              <b> Z06 Walone</b> created by
              <a
                href="https://www.facebook.com/profile.php?id=100076104782520"
                target="_blank"
                rel="noreferrer"
              >
                ZINBO
              </a>
              and other typography sourced from
              <a href="https://fonts.google.com/" target="_blank" rel="noreferrer">
                Google Fonts
              </a>.
            </li>
            <li>
              UI/UX design, front-end development, and technical implementation by
              <span className="ht_text">Uma Ajay Kumar Reddy P S</span>.
            </li>
            <li>
              Special thanks to industry experts and mentors who reviewed my work, including
              <a href="https://www.jerome-kalumbu.com/" target="_blank" rel="noreferrer">
                Jerome Kalumbu
              </a>, whose valuable insights have enhanced the user experience. I highly recommend his book,
              <a
                href="https://jeromekalumbu.gumroad.com/l/dont-start-with-visuals"
                target="_blank"
                rel="noreferrer"
              >
                "Don't Start with Visuals"
              </a>
              for designers and developers.
            </li>
            <li>
              Deep gratitude to my family, friends, and colleagues for their unwavering support, motivation, and constructive feedback that shaped this project into what it is today.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AllCredits;
