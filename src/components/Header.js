import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
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
                    <li class="nav-item">
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
                    <li class="nav-item">
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
            <h1>Nick Misselbrook</h1>
        </div>
      </header>
    )
  }
}