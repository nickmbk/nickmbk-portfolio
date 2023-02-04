import React, { Component } from "react";
import "../styles/ProjectGallery.css";
import "../styles/variables.css";
import "../styles/styles.css";
import projects from "../projects.json";

export default class ProjectGallery extends Component {
  state = {
    projectCounter: 0,
    projects,
  };

  handleLeft = () => {
    if (this.state.projectCounter === 0) {
      this.setState({ projectCounter: this.state.projects.length - 1 });
    } else {
      this.setState({ projectCounter: this.state.projectCounter - 1 });
    }
  };

  handleRight = () => {
    if (this.state.projectCounter === this.state.projects.length - 1) {
      this.setState({ projectCounter: 0 });
    } else {
      this.setState({ projectCounter: this.state.projectCounter + 1 });
    }
  };

  render() {
    return (
      <section className="col-12 col-lg-8 mx-auto p-3">
        <h2>Projects</h2>
        <div id="project-card">
          <div className="row d-flex flex-column">
            <div className="col-12">
              {projects[this.state.projectCounter].title}
            </div>
            <div className="d-flex flex-column flex-md-row-reverse col-12 justify-content-etween">
              <div className="col-12 col-md-6 col-lg-4">
                <img
                  src={projects[this.state.projectCounter].screenshot}
                  alt={projects[this.state.projectCounter].title}
                />
              </div>
              {/* <div className="d-flex flex-column col-12 col-md-6 col-lg-8">
                <div className="col-12">
                  <p>{projects[this.state.projectCounter].description}</p>
                </div>
                <div className="d-flex flex-row justify-content-evenly text-center">
                  <div className="col-6">
                    <a href={projects[this.state.projectCounter].deployed}>
                      <i class="fas fa-globe"></i>
                    </a>
                  </div>
                  <div className="col-6">
                    <a href={projects[this.state.projectCounter].repo}>
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <div className="col-12 d-flex flex-row justify-content-evenly">
                  {this.state.projects[this.state.projectCounter].tech.map(
                    (technology) => {
                      return (
                        <div>
                          <img src={technology} alt="#" />
                        </div>
                      );
                    }
                  )}
                </div>
              </div> */}
            </div>
          </div>
          <div>
            <button id="right" onClick={this.handleRight}>
              Right
            </button>
            <button id="left" onClick={this.handleLeft}>
              Left
            </button>
          </div>
        </div>
      </section>
    );
  }
}
