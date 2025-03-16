import React from "react";
import {
  Github,
  Linkedin,
  Medium,
  Gmail,
  Mastodon,
} from "@icons-pack/react-simple-icons";

const ReachMe = () => {
  return (
    <>
      <div className="reach_me">
        <h1>Connect with Me</h1>

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

          {/* Mastodon */}
          <a href="https://mastodon.social/@UmaAjay" target="_blank" rel="noreferrer">
            <Mastodon xlinkTitle="true" />
          </a>

          {/* Medium */}
          <a href="https://medium.com/@umaajay" target="_blank" rel="noreferrer">
            <Medium xlinkTitle="true" />
          </a>

          {/* Twitter/X */}
          <a href="https://twitter.com/UmaAjayK" target="_blank" rel="noreferrer">
            <svg xlinkTitle="true" aria-label="Twitter" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.46 6.003a8.708 8.708 0 01-2.437.652 4.25 4.25 0 001.888-2.34 8.767 8.767 0 01-2.759 1.05 4.388 4.388 0 00-3.217-1.38c-2.417 0-4.374 1.992-4.374 4.444 0 .35.036.692.108 1.016a12.515 12.515 0 01-9.09-4.68 4.465 4.465 0 00-.593 2.236c0 1.544.773 2.91 1.942 3.7a4.279 4.279 0 01-1.988-.553v.057c0 2.158 1.5 3.954 3.48 4.36a4.234 4.234 0 01-1.981.077c.558 1.773 2.168 3.062 4.06 3.099a8.785 8.785 0 01-5.443 1.89c-.356 0-.71-.021-1.062-.06a12.49 12.49 0 006.77 2.031c8.145 0 12.6-6.74 12.6-12.589l-.015-.575A9.09 9.09 0 0024 5.538a8.35 8.35 0 01-2.54.722z" />
            </svg>
          </a>

          {/* Email */}
          <a href="mailto:umaveena.alvas@gmail.com">
            <Gmail xlinkTitle="true" />
          </a>
        </div>

        <div className="web_links">
          <p>Explore my work:</p>
          <ul>
            <li>
              <a href="https://umaajay.netlify.app/" target="_blank" rel="noreferrer">
                Personal Portfolio
              </a>
            </li>
            <li>
              <a href="https://sanjeevtech.com/" target="_blank" rel="noreferrer">
                Sanjeev Tech (Startup)
              </a>
            </li>
            <li>
              <a href="https://sanjeevsolutions.in/" target="_blank" rel="noreferrer">
                Sanjeev Solutions (Web Solutions)
              </a>
            </li>
            <li>
              <a href="https://sanjeevfoundation.tech/" target="_blank" rel="noreferrer">
                Sanjeev Foundation (EdTech)
              </a>
            </li>
          </ul>
        </div>

        <img width={113} height={20} src="https://komarev.com/ghpvc/?username=UmaAjay" alt="Profile Views Counter" />
      </div>
    </>
  );
};

export default ReachMe;
