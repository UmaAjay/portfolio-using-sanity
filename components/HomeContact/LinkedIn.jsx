import React from "react";

const LinkedIn = () => {
  return (
    <section className="linkedIn_wrapper container_sm container_y_1">
      <div className="linkedIn_content">
        <h1 className="ht_text">Connect with me on LinkedIn</h1>
        <p className="lg_para">
          I am always open to new opportunities and collaborations. Feel free to reach out to me on LinkedIn for any queries, projects, or discussions.
        </p>
        <a
          href="https://www.linkedin.com/in/uma-ajay-kumar-reddy-p-s-1b2a4a1b4/"
          target="_blank"
          rel="noreferrer"
          className="btn btn_primary"
        >
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
};

export default LinkedIn;
