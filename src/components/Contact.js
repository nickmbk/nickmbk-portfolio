import React, { Component } from "react";
import "../styles/Contact.css";

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // code to handle changes when user is typing in the form, will change the values held in state
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };


  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   let contactForm = document.getElementById("contact-form");
  //   let formData = new FormData(contactForm);
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formData).toString(),
  //   })
  //     .then(() => console.log("Form successfully submitted"))
  //     .catch((error) => alert(error));
  // };

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     email: "",
  //     message: "",
  //   });
  // };

  render() {
    return (
      <div>
        <div className="row mx-0 mt-5 mb-5 pt-5 text-center">
          <h2>Contact</h2>
          <p className="my-3">
            If you would like to contact me, you can find me on GitHub,
            LinkedIn, email, and phone down the side. Or you can fill in the
            contact from below.
          </p>
        </div>
        <div className="row mx-auto">
          {/* displays logos and links for various ways to contact me */}
          <div className="col-12 col-md-4 col-lg-2 mx-auto">
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
                  href="https://drive.google.com/file/d/1zl7IKF_khVsQdno94YrvIWOGZ9TT1zt_/view?usp=sharing"
                  className="d-flex flex-row align-items-center"
                >
                  <i className="fas fa-file-pdf icons"></i>
                  <div>
                    <p className="mx-3 my-0 contact">Resume</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* contact form */}
          <div id="contact-form" className="col-12 col-md-8 col-lg-6 mx-auto mb-5">
            <form
              id="contact-form"
              name="contact"
              method="post"
              action=""
              data-netlify="true"
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  className="form-control"
                  placeholder="Your name"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  className="form-control"
                  placeholder="Your email address"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="subject"
                  value={this.state.subject}
                  className="form-control"
                  placeholder="Subject"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  value={this.state.message}
                  rows="10"
                  placeholder="Your message"
                  onChange={this.handleInputChange}
                ></textarea>
              </div>
              <button
                type="submit"
                id="submit-button"
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
// /*    /index.html   200
