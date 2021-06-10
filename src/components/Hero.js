import React from "react";

const Hero = () => {
  return (
    <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              Hii I Am{" "}
              <span className="text-warning">Full-Stack Web Developer </span>
            </h1>
            <p className="lead my-4">
              I'm Enthusiastic Web Developer, Programmer & Coder, Freelancer
              eager to contribute to team success through Smart work, attention
              to details and more efficient organizational skills. Clear
              understanding of HTML, CSS, Javascript, React, Redux, MERN,
              React-Native. Motivated to learn Something New In Dev Industry.
            </p>
            <a
              className="btn btn-primary btn-lg"
              href="./Resume.pdf"
              download="Ranjan-Sharma-Resume"
            >
              Download CV
            </a>
          </div>
          <img
            className="img-fluid w-50 d-none d-sm-block"
            draggable="false"
            src="/images/Hero.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
