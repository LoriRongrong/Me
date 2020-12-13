import React, { Component } from "react";

class CaseStudy extends Component {
  render() {
    if (this.props.data) {
      // design prompt and objective
      var objective = this.props.data.objectives.map(function (objectives) {
        return (
          <div key={objectives.prompt}>
            <h3>{objectives.prompt}</h3>
            <p>{objectives.description}</p>
            <h3>{objectives.obj}</h3>
            <p>{objectives.objContent}</p>
          </div>
        );
      });
      var background = (
        <div>
          <p>{this.props.data.background}</p>
        </div>
      );
      var show = `${process.env.PUBLIC_URL}/images/` + this.props.data.showcase;
      // user research
      var re = this.props.data.research.map(function (research) {
        return (
          <div key={research.method}>
            <h3>{research.method}</h3>
            <p>{research.methodDescription}</p>
            <p>{research.interviews}</p>
          </div>
        );
      });
      // problem statement
      // var statement = this.props.data.statement.map(function(statement){
      //     return (
      //         <div key={statement}>
      //             <p>{statement}</p>
      //         </div>
      //     );
      // });
      var statement = (
        <div>
          <p>{this.props.data.statement}</p>
        </div>
      );
      var personaDescription = (
        <div>
          <p>{this.props.data.personas.description}</p>
        </div>
      );
      var person1 =
        `${process.env.PUBLIC_URL}/images/` +
        this.props.data.personas.pictures.profiles1;
      //   console.log(person1);
      var person2 =
        `${process.env.PUBLIC_URL}/images/` +
        this.props.data.personas.pictures.profiles2;
      var p1Description = (
        <div>
          <p>{this.props.data.personas.persona1Dept}</p>
        </div>
      );
      var p2Description = (
        <div>
          <p>{this.props.data.personas.persona2Dept}</p>
        </div>
      );
      var personaExplanation = (
        <div>
          <p>{this.props.data.personas.explanation}</p>
        </div>
      );
      // UX flow --> how can I use only a picture to represent
      var uxPre = <p>{this.props.data.UX.redesign}</p>;
      var ux = this.props.data.UX.actualFlow.map(function (actualFlow) {
        return (
          // how to place an image though
          <div key={actualFlow.title}>
            {/* <h3>{actualFlow.title}</h3> */}
            <p>{actualFlow.uX}</p>
            <div>
              <img
                width="600"
                src={`${process.env.PUBLIC_URL}/images/` + actualFlow.flow}
              ></img>
            </div>
          </div>
        );
      });

      // user testing
      var test = this.props.data.testing.map(function (testing) {
        return (
          // how to place an image though
          <div key={testing.directions}>
            <p>{testing.directions}</p>
            <h3>Strength</h3>
            <p>
              {testing.strength.map(function (strength) {
                return <li>{strength.s}</li>;
              })}
            </p>

            <h3>Struggles</h3>
            <p>
              {" "}
              {testing.confusion.map(function (confusion) {
                return <li>{confusion.c}</li>;
              })}
            </p>
            <h3>Point of view</h3>
            <p style={{ fontStyle: "italic" }}>{testing.viewpoint}</p>
          </div>
        );
      });

      var high = (
        <div>
          <p>{this.props.data.hiFi.description}</p>
        </div>
      );
      var drop =
        `${process.env.PUBLIC_URL}/images/` + this.props.data.hiFi.dropdown;
      var options = (
        <div>
          {this.props.data.hiFi.options.map(function (options) {
            return (
              <img
                style={{ padding: "5px", float: "center" }}
                width="350"
                src={`${process.env.PUBLIC_URL}/images/` + options.pic}
              ></img>
            );
          })}
        </div>
      );
      var outcomeDis = (
        <div>
          <p>{this.props.data.hiFi.outcomeDescription}</p>
        </div>
      );
      var outcome = (
        <div>
          {this.props.data.hiFi.outcome.map(function (outcome) {
            return (
              <img
                className="imgChild"
                style={{ width: "50%", padding: "20px", paddingTop: "0px" }}
                src={`${process.env.PUBLIC_URL}/images/` + outcome.pic}
              ></img>
            );
          })}
        </div>
      );

      var reflect = (
        <div>
          <p>{this.props.data.reflection}</p>
        </div>
      );
    }

    return (
      <section id="caseStudy">
        <div className="row">
          <div
            className="eight columns"
            style={{
              fontSize: "30px",
              paddingBottom: "30px",
              color: "#B39BC8",
              fontStyle: "italic",
            }}
          >
            Product Design Case Study
          </div>
          <div className="four columns" style={{marginTop:"10px", color:"#f3d250"}}>Sept 2020 - Dec 2020</div>
        </div>
        <div className="row history">
          <div className="three columns header-col">
            <h1>
              <span>Where the journey began ...</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div
              className="imgChild uniformStyling"
              style={{
                width: "70%",
                paddingLeft: "0px",
              }}
            >
              {background}
            </div>
            <div>
              <img
                width="20"
                height="20"
                src={show}
                alt="background"
                className="imgChild"
                style={{ textAlign: "right", paddingTop: "0px" }}
              ></img>
            </div>
          </div>
        </div>
        <div className="row objectives">
          <div className="three columns header-col">
            <h1>
              <span>Design Objectives</span>
            </h1>
          </div>
          {/* need to add the variable */}
          <div className="nine columns main-col uniformStyling">
            {objective}
          </div>
        </div>

        <div className="row userResearch">
          <div className="three columns header-col">
            <h1>
              <span>User side of stories</span>
            </h1>
          </div>
          <div className="nine columns main-col uniformStyling">{re}</div>
        </div>

        <div className="row problemStatement">
          <div className="three columns header-col">
            <h1 style={{ color: "#659DBD" }}>
              <span>Problem Statement</span>
            </h1>
          </div>
          <div className="nine columns main-col uniformStyling" id="pStatement">
            {statement}
          </div>
        </div>
        <div className="row personas">
          <div className="three columns header-col">
            <h1>
              <span>Personas</span>
            </h1>
          </div>
          <div className="nine columns main-col uniformStyling">
            {personaDescription}
          </div>
        </div>
        <div className="row">
          <div className="imgChild">
            <img width="240" height="180" src={person2} alt="James"></img>
          </div>
          <div
            className="imgChild"
            style={{ fontSize: "large", color: "#c4c4c4" }}
          >
            {p1Description}
          </div>
          <div className="imgChild">
            <img width="240" height="180" src={person1} alt="Lucy"></img>
          </div>
          <div
            className="imgChild"
            style={{ fontSize: "large", color: "#c4c4c4" }}
          >
            {p2Description}
          </div>
        </div>
        <div className="row">
          <div className="three columns header-col"></div>
          <div
            className="nine columns main-col uniformStyling"
            style={{ paddingTop: "20px" }}
          >
            {personaExplanation}
          </div>
        </div>

        <div className="row UXFlow">
          <div className="three columns header-col">
            <h1>
              <span>Logic of design</span>
            </h1>
          </div>
          <div className="nine columns main-col uniformStyling">
            {uxPre}
            {ux}
          </div>
        </div>

        <div className="row userTesting" style={{ paddingTop: "20px" }}>
          <div className="three columns header-col">
            <h1>
              <span>Feedback from users</span>
            </h1>
          </div>
          <div
            className="nine columns main-col uniformStyling"
            style={{ paddingTop: "10px" }}
          >
            {test}
          </div>
        </div>

        <div className="row hiFi">
          <div className="three columns header-col">
            <h1>
              <span>High Fidelity Prototype</span>
            </h1>
          </div>
          <div className="nine columns main-col uniformStyling">
            <div
              className="imgChild"
              style={{
                width: "70%",
                paddingLeft: "0px",
              }}
            >
              {high}
            </div>
            <div>
              <img width="200px" src={drop}></img>
            </div>
          </div>
          <div className="row">{options}</div>

          <div className="three columns header-col"></div>

          <div
            className="nine columns main-col uniformStyling"
            style={{ paddingTop: "15px" }}
          >
            <div>{outcomeDis}</div>
          </div>
          <div className="row">
            <div>{outcome}</div>
          </div>
        </div>

        <div className="row refelection">
          <div className="three columns header-col">
            <h1>
              <span>Thoughts</span>
            </h1>
          </div>
          <div
            className="nine columns main-col uniformStyling"
            style={{ fontStyle: "Bold" }}
          >
            {reflect}
          </div>
        </div>
      </section>
    );
  }
}

export default CaseStudy;
