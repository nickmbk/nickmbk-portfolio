import React, { Component } from 'react'

export default class Project extends Component {

    render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
      </section>
    )
  }
}


// import React, { Component } from 'react'

// export default class Project extends Component {
//     render() {
//     return (
//         <section className="col-12 col-lg-8 mx-auto p-3">
//             <h2>{this.props.title}</h2>
//             <div id="project-card">
//             <div className="row d-flex flex-column">
//                 <div className="d-flex flex-column flex-md-row-reverse col-12 justify-content-etween">
//                 <div className="col-12 col-md-6 col-lg-4">
//                     <img
//                     src={this.props.screenshot}
//                     alt={this.props.title}
//                     />
//                 </div>
//                 <div className="d-flex flex-column col-12 col-md-6 col-lg-8">
//                     <div className="col-12">
//                     <p>{this.props.description}</p>
//                     </div>
//                     <div className="d-flex flex-row justify-content-evenly text-center">
//                     <div className="col-6">
//                         <a href={this.props.deployed}>
//                         <i class="fas fa-globe"></i>
//                         </a>
//                     </div>
//                     <div className="col-6">
//                         <a href={this.props.repo}>
//                         <i className="fab fa-github"></i>
//                         </a>
//                     </div>
//                     </div>
//                     <div className="col-12 d-flex flex-row justify-content-evenly">
//                     {this.state.this.props.tech.map(
//                         (technology) => {
//                         return (
//                             <div>
//                             <img src={technology} alt="#" />
//                             </div>
//                         );
//                         }
//                     )}
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </section>
//     )
// }
// }