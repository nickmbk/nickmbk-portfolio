import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import "../styles/variables.css";

export default class Header extends Component {
  render() {
    return (
      <div id="header" className="row m-0">
        <header className="m-0 p-2">
          {/* bootstrap nav bar to go to various parts of the site */}
          <nav id="nav" className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button
                id="nav-button"
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse d-lg-flex justify-content-lg-center"
                id="navbarSupportedContent"
              >
                {/* using NavLink from react router to create links to other components */}
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item mx-lg-5">
                    <NavLink
                      to="/"
                      end
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item mx-lg-5">
                    <NavLink
                      to="project-gallery"
                      end
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Projects
                    </NavLink>
                  </li>
                  <li className="nav-item mx-lg-5">
                    <NavLink
                      to="contact"
                      end
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div>
            <div>
              {/* a list of ways to connect with me always displayed in the header at the top of the site, i think contact information can be hard to find on a lot of sites, I think it should always be accessible for users */}
              <ul
                id="contacting"
                className="d-flex flex-row justify-content-evenly p-0 m-3"
              >
                <li>
                  <a href="https://www.github.com/nickmbk/">
                    <i id="github" className="fab fa-github"></i>
                    <p className="d-none d-md-inline-block mx-3 my-0 links">
                      GitHub
                    </p>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/nickmbk/">
                    <i className="fab fa-linkedin"></i>
                    <p className="d-none d-md-inline-block mx-3 my-0 links">
                      LinkedIn
                    </p>
                  </a>
                </li>
                <li>
                  <a href="mailto:nick.mbk@hotmail.com">
                    <i className="fas fa-envelope"></i>
                    <p className="d-none d-md-inline-block mx-3 my-0 links">
                      Email
                    </p>
                  </a>
                </li>
                <li>
                  <a href="callto:+447769327480">
                    <i className="fas fa-phone"></i>
                    <p className="d-none d-md-inline-block mx-3 my-0 links">
                      Phone
                    </p>
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1zl7IKF_khVsQdno94YrvIWOGZ9TT1zt_/view?usp=sharing">
                    <i className="fas fa-file-pdf"></i>
                    <p className="d-none d-md-inline-block mx-3 my-0 links">
                      Resume
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
