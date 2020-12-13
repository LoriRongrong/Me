import React, { Component } from "react";


class Header extends Component {
  render() {
    if (this.props.data) {
      
      var logo = `${process.env.PUBLIC_URL}/images/` + this.props.data.logo;
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function(network) {
        return (
          <li style={{paddingLeft:"100px", paddingRight:"100px"}}key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        {/* <nav id="nav-wrap">
          <div className="logo">
            <img src={logo} alt="Logo"></img>
          </div>

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
             
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
              
              About
                
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#caseStudy">
                Case Study
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                ArtWork
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Quotes
              </a>
            </li>
          </ul>
        </nav> */}
        

        <div className="row banner">
          
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>
              <span>{occupation}</span> based in {city}. {description}.
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        {/* <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p> */}
      </header>

    );
  }
}

export default Header;
