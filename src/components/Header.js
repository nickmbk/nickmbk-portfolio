import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import "../styles/variables.css";
import "../styles/styles.css";

export default class Header extends Component {
  render() {
    return (
      <div className="row m-0">
        <header>
            <nav
            id="nav"
            className="navbar navbar-expand-lg bg-body-tertiary bg-light"
            >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                Navbar
                </a>
                <button
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
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
                >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink
                        to="home"
                        end
                        className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Home
                    </NavLink>
                    </li>
                    <li className="nav-item">
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
                    <li className="nav-item">
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
                <h1 className="my-5">Nick Misselbrook</h1>
            </div>
            <div>
                <ul
                id="contacting"
                className="d-flex flex-row flex-md-column justify-content-evenly p-0 m-md-5"
                >
                <li>
                    <a href="https://www.github.com/nickmbk/">
                    <i className="fab fa-github"></i>
                    <p className="d-none d-md-inline-block mx-3">GitHub</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/nickmbk/">
                    <i className="fab fa-linkedin"></i>
                    <p className="d-none d-md-inline-block mx-3">LinkedIn</p>
                    </a>
                </li>
                <li>
                    <a href="mailto:nick.mbk@hotmail.com">
                    <i className="fas fa-envelope"></i>
                    <p className="d-none d-md-inline-block mx-3">email</p>
                    </a>
                </li>
                <li>
                    <a href="callto:+447769327480">
                    <i className="fas fa-phone"></i>
                    <p className="d-none d-md-inline-block mx-3">Phone</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="fas fa-file-pdf"></i>
                    <p className="d-none d-md-inline-block mx-3">Resume</p>
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
