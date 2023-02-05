import React, { Component } from "react";
import '../styles/Contact.css';

export default class Contact extends Component {
  state = {
    email: "",
    subject: "",
    message: "",
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      message: "",
    });
  };

  render() {
    return (
      <div>
        <div className="row mx-0 mt-5 mb-5 pt-5 text-center">
          <h2>Contact</h2>
          <p className="my-3">If you would like to contact me, you can find me on GitHub, LinkedIn, email, and phone down the side.  Or you can fill in the contact from below.</p>
        </div>
        
        


        <div className="row mx-auto">
          <div className="col-12 col-md-4 col-lg-3 mx-auto">
          <ul
            id="contact-info"
            className="d-flex flex-column flex-wrap justify-content-evenly p-0 m-3"
          >
            <li className="my-3">
              <a
                href="https://www.github.com/nickmbk/"
                className="d-flex flex-row align-items-start"
              >
                <i className="fab fa-github icons"></i>
                <div>
                  <p className="mx-3 my-0 contact">GitHub</p>
                  <p className="mx-3 my-0 contact">nickmbk</p>
                </div>
              </a>
            </li>
            <li className="my-3">
              <a
                href="https://www.linkedin.com/in/nickmbk/"
                className="d-flex flex-row align-items-start"
              >
                <i className="fab fa-linkedin icons"></i>
                <div>
                  <p className="mx-3 my-0 contact">LinkedIn</p>
                  <p className="mx-3 my-0 contact">nickmbk</p>
                </div>
              </a>
            </li>
            <li className="my-3">
              <a
                href="mailto:nick.mbk@hotmail.com"
                className="d-flex flex-row align-items-center"
              >
                <i className="fas fa-envelope icons"></i>
                <div>
                  <p className="mx-3 my-0 contact">email</p>
                  <p className="mx-3 my-0 contact">nick.mbk@hotmail.com</p>
                </div>
              </a>
            </li>
            <li className="my-3">
              <a
                href="callto:+447769327480"
                className="d-flex flex-row align-items-center"
              >
                <i className="fas fa-phone icons"></i>
                <div>
                  <p className="mx-3 my-0 contact">Phone</p>
                  <p className="mx-3 my-0 contact">+447769327480</p>
                </div>
              </a>
            </li>
            <li className="my-3">
              <a href="https://drive.google.com/file/d/1zl7IKF_khVsQdno94YrvIWOGZ9TT1zt_/view?usp=sharing" className="d-flex flex-row align-items-center">
                <i className="fas fa-file-pdf icons"></i>
                <div>
                  <p className="mx-3 my-0 contact">Resume</p>
                </div>
              </a>
            </li>
          </ul>
          </div>
        
          <div id="contact-form"  className="col-12 col-md-8 col-lg-7 mx-auto">
            <form method="post" action="subscriberform.php">
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
              <input
                type="text"
                name="subject"
                value={this.state.subject}
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Subject"
                onChange={this.handleInputChange}
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control"
                name="message"
                value={this.state.message}
                id="exampleFormControlTextarea1"
                rows="10"
                placeholder="Your message"
                onChange={this.handleInputChange}
              ></textarea>
            </div>
            <button id="submit-button"
              className="col-12 col-md-3 mx-auto rounded"
              // onClick={this.handleFormSubmit}
            >
              Submit
            </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
