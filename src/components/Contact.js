import React, { Component } from "react";

export default class Contact extends Component {

  state = {
    email : '',
    message : ''
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;


    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      email: '',
      message: ''
    })
  }

  render() {
    return (
      <div>
        <div className="row m-0 text-center">
          <h2>Contact</h2>
        </div>
        <div className="row m-0">
          <ul
            id="contact-info"
            className="d-flex flex-row flex-wrap justify-content-evenly p-0 m-0"
          >
            <li>
              <a
                href="https://www.github.com/nickmbk/"
                className="d-flex flex-column align-items-center"
              >
                <i className="fab fa-github"></i>
                <p className="d-inline-block mx-3">GitHub</p>
                <p className="d-inline-block mx-3">nickmbk</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nickmbk/"
                className="d-flex flex-column align-items-center"
              >
                <i className="fab fa-linkedin"></i>
                <p className="d-inline-block mx-3">LinkedIn</p>
                <p className="d-inline-block mx-3">nickmbk</p>
              </a>
            </li>
            <li>
              <a
                href="mailto:nick.mbk@hotmail.com"
                className="d-flex flex-column align-items-center"
              >
                <i className="fas fa-envelope"></i>
                <p className="d-inline-block mx-3">email</p>
                <p className="d-inline-block mx-3">nick.mbk@hotmail.com</p>
              </a>
            </li>
            <li>
              <a
                href="callto:+447769327480"
                className="d-flex flex-column align-items-center"
              >
                <i className="fas fa-phone"></i>
                <p className="d-inline-block mx-3">Phone</p>
                <p className="d-inline-block mx-3">+447769327480</p>
              </a>
            </li>
            <li>
              <a href="#" className="d-flex flex-column align-items-center">
                <i className="fas fa-file-pdf"></i>
                <p className="d-inline-block mx-3">Resume</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="row m-0">
          <div id="contact-form">
            <div class="mb-3">
              <input
                type="email"
                name="email"
                value={this.state.email}
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Your email address"
                onChange={this.handleInputChange}
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control"
                name="message"
                value={this.state.message}
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your message"
                onChange={this.handleInputChange}
              ></textarea>
            </div>
            <button className="col-12 col-med-3 mx-auto" onClick={this.handleFormSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
