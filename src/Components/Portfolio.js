import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function(project) {
        var projectImage = `${process.env.PUBLIC_URL}/images/portfolio/` + project.image;
        return (
          <div
            key={project.image}
            style={{ widht: 600, heght: 650, backgroundColor: "#25274d" }}
          >
            <img
              src={projectImage}
              alt={project.image}
              style={{ width: 500, heght: 550 }}
            />
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapse">
            {/* <div className="center"> */}
            <h1>My Artwork</h1>
            <Carousel showStatus={false} infiniteLoop={true}>
              {projects}
            </Carousel>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
