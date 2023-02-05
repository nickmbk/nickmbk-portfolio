import React, { Component } from 'react';
import headshot from '../images/headshot.jpg';
import '../styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <section className="mt-5 pt-5">
        <div className="row m-0 p-0 d-flex flex-column flex-md-row-reverse align-items-center justify-content-md-center">
          {/* <div className="m-0 d-flex justify-content-center justify-content-md-end"> */}
            <img id="headshot" className="rounded-circle col-12 col-med-4 mx-0 p-0" src={headshot} alt="Nick Misselbrook" />
          {/* </div> */}
          <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start m-0 p-0">
            {/* <div className="mx-2"> */}
              <h1 className="my-3 text-center text-sm-start">Nick Misselbrook</h1>
            {/* </div> */}
            {/* <div className=""> */}
              <h2 className="my-3 text-center text-sm-start">My Porfolio site</h2>
            {/* </div> */}
          </div>
        </div>
        <div className="row m-0 p-0">
          <p id="about-me" className="col-10 col-md-8 mx-auto my-5">This is about me. This is about me. This is about me. This is about me. This is about me. This is about me. This is about me. This is about me. This is about me. This is about me. This is about me. This is about me.</p>
        </div>
      </section>
    )
  }
}
