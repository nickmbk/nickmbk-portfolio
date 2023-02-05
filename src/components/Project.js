import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Project.css";

function Project() {
  // had to take the props a slightly differnet way as it's harder for Links to send props and this particular way won't be received by classes, so had to use a function for this component
  // had to extract what was sent from the ProjectGallery component from useLocation
  const props = useLocation().state;
  return (
    // Displays the project based on the information this component has received from props, which was sent by the ProjectGallery component
    <section className="col-12 col-lg-10 mx-auto p-3">
      <div className="my-5 pt-5">
        <h2>{props.title}</h2>
      </div>
      <div id="project-card">
        <div className="row d-flex flex-columnm-0">
          <div className="d-flex flex-column flex-md-row-reverse col-12 justify-content-between">
            <div className="col-12 col-md-6 col-lg-5">
              <img
                className="project-page-image"
                src={props.screenshot}
                alt={props.title}
              />
            </div>
            <div className="d-flex flex-column col-12 col-md-6 col-lg-7 pe-md-5">
              <div className="col-12 mt-5 mt-md-0 mb-3">
                <p>{props.description}</p>
              </div>
              <div className="d-flex flex-row justify-content-evenly text-center">
                <div className="col-6 pt-2 pb-4">
                  <a href={props.deployed}>
                    <i className="fas fa-globe project-icons"></i>
                  </a>
                </div>
                <div className="col-6 pt-2 pb-4">
                  <a href={props.repo}>
                    <i className="fab fa-github project-icons"></i>
                  </a>
                </div>
              </div>
              <div className="col-12 d-flex flex-row justify-content-evenly my-5">
                {props.tech.map((technology) => {
                  return (
                    <div key={props.id}>
                      <img className="tech-icons" src={technology} alt="#" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

// https://ui.dev/react-router-pass-props-to-link
// https://www.youtube.com/watch?v=NWG1Ygt1k1k&t=381s
