import React, { Component } from "react";
import ReactWordcloud from "react-wordcloud";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var skill = (
        <ReactWordcloud
          options={{
            colors: [
              "#314455",
              "#644e5b",
              "#9e5a63",
              "#31708e",
              "#e85a4f",
              "#501b1d",
            ],
            fontFamily: "impact",
            fontSizes: [20, 40, 0],
            fontStyle: "normal",
            fontWeight: "normal",
            padding: 1,
            rotations: 3,
            rotationAngles: [0, 45, 90],
            scale: "sqrt",
            spiral: "rectangular",
            transitionDuration: 3000,
          }}
          words={this.props.data.skills.map((skill) => {
            return { text: skill.name, value: skill.level };
          })}
        />
      );
    }

    return (
      <section
        className="smoothscroll"
        id="resume"
        style={{
          overflow: "auto",
          height: "inherit",
          display: "block",
          width: "100%",
        }}
      >
        <div className="row education" style={{ overflow: "auto" }}>
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div
                className="twelve columns"
                style={{ fontSize: "large", fontFamily: "calibri",letterSpacing:"1px"}}
              >
                {education}
              </div>
            </div>
          </div>
        </div>

        <div className="row work" style={{ overflow: "auto" }}>
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div
            className="nine columns main-col"
            style={{ fontSize: "large", fontFamily: "calibri", letterSpacing:"1px"}}
          >
            {work}
          </div>
        </div>

        {/* <div className="row skill" style={{overflow: 'auto'}}>
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="twelve columns main-col">{skill}</div>
        </div> */}
      </section>
    );
  }
}

export default Resume;
