import React, { Component } from "react";
import "../styles/ProjectGallery.css";
import "../styles/variables.css";
import "../styles/styles.css";
import projects from "../projects.json";
import Project from './components/Project';

export default class ProjectGallery extends Component {
  state = {
    projects,
    clickedProject: 0,
  };

  handleClick = (item) => {
    <Project title={item.title} screenshot={item.screenshot} deployed={item.deployed} repo={item.repo} tech={item.tech} description={item.description}/>
  }

    render() {
    return (
      <section className="col-12 col-lg-8 mx-auto p-3">
        <div>
            <h2>Projects</h2>
        </div>
        <div className="d-flex flex-column flex-md-row flex-md-wrap">
            {this.state.projects.map((item) => {
                return (
                    <div className="col-12 col-md-6">
                        <div className="project-card" onClick={this.handleClick({item})}>
                            <div className="row m-0 d-flex flex-column">
                                <div className="col-12">
                                    {item.title}
                                </div>
                                <div className="col-12" key={item.id}>
                                    <img
                                    src={item.screenshot}
                                    alt={`${item.title} Screenshot`}
                                    data-id={item.id}
                                    />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                );
                }
            )}
        </div>
            {/* <div>
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
                        </div>
                    </div>
                </div>
            </div> */}
      </section>
    );
  }
}
