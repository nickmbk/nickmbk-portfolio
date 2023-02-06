import React, { Component } from "react";
import headshot from "../images/headshot.jpg";
import "../styles/Home.css";

export default class Home extends Component {
  render() {
    return (
      <section className="mt-5 pt-5">
        {/* Introduction of myself, with a photo */}
        <div className="row m-0 p-0 d-flex flex-column flex-md-row-reverse align-items-center justify-content-md-center">
          <img
            id="headshot"
            className="rounded-circle col-12 col-med-4 mx-0 p-0"
            src={headshot}
            alt="Nick Misselbrook"
          />
          <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start m-0 p-0">
            <h1 className="my-3 text-center text-md-start">Nick Misselbrook</h1>
            <h2 className="my-3 text-center text-md-start">Junior Front End<br /> Web Developer</h2>
          </div>
        </div>
        <div className="row m-0 p-0">
          <p id="about-me" className="col-10 col-md-10 col-lg-8 mx-auto my-5">
            Hi! I'm Nick and welcome to my portfolio.  You can find some of the projects I have recently worked on and can also contact me,
          </p>
        </div>
      </section>
    );
  }
}
