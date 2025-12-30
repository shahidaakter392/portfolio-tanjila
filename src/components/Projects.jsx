import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Project-1</h5>
                <p className="card-text">HTML & CSS Based Website
                                           This project is developed using HTML and CSS.
                                           HTML is used to create the structure of the website, while CSS is used to design the layout, colors, and fonts.
                                           The main goal of this project is to build a clean, simple, and visually attractive static website.
                </p>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">project-2</h5>
                <p className="card-text"> Responsive Website with Bootstrap
                                          This project is built using HTML, CSS, and Bootstrap.
                                          Bootstrap helps make the website fully responsive, so it works well on mobile, tablet, and desktop devices.
                                          We used Bootstrap components like navbar, cards, and grid system to improve the user experience.
               </p>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card h-100">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">project-3</h5>
                <p className="card-text"> React Portfolio Website
                                          This project is created using React.
                                          React components are used to build a dynamic and reusable user interface.
                                          This portfolio website showcases skills, projects, and contact information in a modern and interactive way.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

