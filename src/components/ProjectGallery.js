import React, { Component } from 'react'
import "../styles/ProjectGallery.css";
import "../styles/variables.css";
import "../styles/styles.css";
import projects from "../projects.json";

export default class ProjectGallery extends Component {
  state = {
    projectCounter: 0,
    projects
  }

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
                        <img src={projects[this.state.projectCounter].screenshot} alt={projects[this.state.projectCounter].title} />
                    </div>
                    <div className="d-flex flex-column col-12 col-md-6 col-lg-8">
                        <div className="col-12">
                            <p>This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. 
                            </p>
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
                            {this.state.projects[this.state.projectCounter].tech.map(technology => {
                                return <div>
                                    <img src={technology} alt="#" />
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row d-flex">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12">
                                {projects[0].title}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="col-6">
                                    <a href={projects[0].deployed}>
                                        <i class="fas fa-globe"></i>
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a href={projects[0].repo}>
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <p>tech</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className="d-inline-block" src={projects[0].screenshot} alt={projects[0].title} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. 
                        </p>
                    </div>
                </div>
            </div> */}
            
            
            
            
        </div>
      </section>
    )
  }
}
