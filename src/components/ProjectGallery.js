import React, { Component } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import "../styles/ProjectGallery.css";
import "../styles/variables.css";
import "../styles/styles.css";
import projects from "../projects.json";
import readme from '../images/screenshots/readme-generator-screenshot.jpg';
import Project from './Project';

export default class ProjectGallery extends Component {
  state = {
    projects,
  };
//   handleClick = (item) => {
//     return (
//         <>
        
//         <Routes>
//             <Route path='project' element={<Project />}/>
//         </Routes>
//         </>
//     )
//   }

    render() {
    return (
      <section className="col-12 col-lg-8 mx-auto p-3">
        <div>
            <h2>Projects</h2>
        </div>
        <div className="d-flex flex-column flex-md-row flex-md-wrap">
            {this.state.projects.map((item) => {
                return (
                    <div className="col-12 col-md-6"  key={item.id}>
                        <Link to={{pathname: "project", state: {
                            title: item.title,
                            screenshot: item.screenshot,
                            deployed: item.deployed,
                            repo: item.repo,
                            tech: item.tech
                        }}}>
                            <div className="project-card" >
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
                            {/* <Project title={item.title} screenshot={item.screenshot} deployed={item.deployed} repo={item.repo} tech={item.tech} description={item.description} /> */}
                        </Link>
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
