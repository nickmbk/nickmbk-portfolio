import React, { Component } from 'react';
import headshot from '../images/headshot.jpg';
import '../styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <section className="d-flex flex-column flex-md-row">
        <div className="row text-end mx-2">
          <h1>Nick Misselbrook</h1>
        </div>
        <div className="row col-8 col-md-4 m-0 mx-auto">
          <img id="headshot" className="rounded-circle" src={headshot} alt="Nick Misselbrook" />
        </div>
        <div className="row text-start align-self-end">
          <h2>My Porfolio site</h2>
        </div>
      </section>
    )
  }
}
