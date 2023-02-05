import React, { Component } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import "../styles/ProjectGallery.css";
import "../styles/variables.css";
import Projects from "../projects.json";

export default class ProjectGallery extends Component {

  render() {
    return (
      <section className="col-12 col-lg-10 mx-auto p-3">
        <div className="text-center mx-0 my-5 pt-5">
            <h2 id="project-h2">Projects</h2>
        </div>
        <div className="d-flex flex-column flex-md-row flex-md-wrap">
            {Projects && Projects.map((item) => {
                return (
                    <div className="col-12 col-lg-6"  key={item.id}>
                        {/* <Link to="/project"> */}
                        
                        <Link to="/project" state={{ 
                        title: item.title,
                        screenshot: item.screenshot,
                        deployed: item.deployed,
                        repo: item.repo,
                        tech: item.tech,
                        description: item.description
                        }}>
                            <div className="project-card mx-0 my-3 m-md-4 m-xl-5">
                                <div className="row m-0 d-flex flex-column">
                                    <div className="col-12">
                                        <h3 className="project-heading">{item.title}</h3>
                                    </div>
                                    <div className="col-12" key={item.id}>
                                        <img className="project-card-image"
                                        src={item.screenshot}
                                        alt={`${item.title} Screenshot`}
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
      </section>
    );
  }
}
