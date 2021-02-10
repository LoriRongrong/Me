import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import CaseStudy from "./Components/CaseStudy";

export default function App() {
  const [state, setState] = useState({
    resumeData: {},
  });
  let logo = `${process.env.PUBLIC_URL}/images/`;
  if (state.resumeData.main?.logo) {
    logo += state.resumeData.main.logo;
  }

  const getResumeData = () => {
    $.ajax({
      url: `${process.env.PUBLIC_URL}/resumeData.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        setState({ resumeData: data });
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  };

  useEffect(() => {
    getResumeData();
  }, [getResumeData]);

  return (
    <div className="App">
      <header id="home" style={{ height: "500px" }}>
        <nav id="nav-wrap">
          <div className="topnav">
            <ul id="nav" className="nav">
              <li style={{ marginTop: "-20px" }}>
                <Link to="/">
                  <img className="logo" src={logo} alt="Logo"></img>
                </Link>
              </li>
              <li className="current">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/caseStudy">Case Study</Link>
              </li>
              <li>
                <Link to="/art">Art Work</Link>
              </li>
              <li>
                <Link to="/quotes">Quotes</Link>
              </li>
            </ul>

            <Switch>
              <Route exact path="/">
                <Header data={state.resumeData.main} />
              </Route>
              <Route path="/about">
                <About data={state.resumeData.main} />
              </Route>

              <Route path="/resume">
                <Resume data={state.resumeData.resume} />
              </Route>
              <Route path="/caseStudy">
                <CaseStudy data={state.resumeData.casestudy} />
              </Route>
              <Route path="/art">
                <Portfolio data={state.resumeData.portfolio} />
              </Route>
              <Route path="/quotes">
                <Testimonials data={state.resumeData.testimonials} />
              </Route>
            </Switch>
          </div>
        </nav>
      </header>
    </div>
  );
}
