import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import "../styles/variables.css";
import "../styles/styles.css";

export default class Header extends Component {
  render() {
    return (
      <div id="header" className="row m-0">
        <header className="m-0 p-2">
            <nav
            id="nav"
            className="navbar navbar-expand-lg"
            >
            <div className="container-fluid">
                <button id="nav-button"
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
                        Project Gallery
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
                <ul
                id="contacting"
                className="d-flex flex-row justify-content-evenly p-0 m-3"
                >
                <li>
                    <a href="https://www.github.com/nickmbk/">
                    <i id="github" className="fab fa-github"></i>
                    <p className="d-none d-md-inline-block mx-3 my-0">GitHub</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/nickmbk/">
                    <i className="fab fa-linkedin"></i>
                    <p className="d-none d-md-inline-block mx-3 my-0">LinkedIn</p>
                    </a>
                </li>
                <li>
                    <a href="mailto:nick.mbk@hotmail.com">
                    <i className="fas fa-envelope"></i>
                    <p className="d-none d-md-inline-block mx-3 my-0">Email</p>
                    </a>
                </li>
                <li>
                    <a href="callto:+447769327480">
                    <i className="fas fa-phone"></i>
                    <p className="d-none d-md-inline-block mx-3 my-0">Phone</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="fas fa-file-pdf"></i>
                    <p className="d-none d-md-inline-block mx-3 my-0">Resume</p>
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
