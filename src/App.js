import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import VizSensor from 'react-visibility-sensor';

import './App.css';

class App extends React.Component {

  state = { width: 0, height: 0, imgViz : false };

  updateDimensions = () => {
    console.log("hey");
    if (this.state.height < window.innerHeight){ window.location = "#App-content"}
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  render() {


    return (
      <div className="App">
        <Header  />
        <VizSensor partialVisibility onChange={(isVisible) => {this.setState({imgViz : isVisible})}}>

          <Content />
        </VizSensor>

      </div>
    );
  }
}


function Header() {
  return(
    <header id="App-header">
      <h1 className="App-title">Florent Bednarek</h1>
      <Arrow />
    </header>
  );
}

function Arrow() {
  return(
    <div className="fa fa-chevron-down down-arrow bounce">
      <a href="#App-content">
      <button className="arrow-button">
      </button>
      </a>
    </div>
    );
}

function ArrowBack() {
  return(
    <div className="fa fa-chevron-left back-arrow">
      <a href="#App-header">
      <button className="arrow-button">
      </button>
      </a>
    </div>
    );
}



class AboutMe extends React.Component {
  state = {
    imgViz: false
  }

  render() {
      return(
        <VizSensor partialVisibility
            onChange={(isVisible) => {
              this.setState({imgViz : isVisible})
            }}
          >
          <div id="AboutMe">
            <Resume Viz={this.state.imgViz} />

            <div className='v1' 
              style={{
                height : this.state.imgViz ? '100%' : '0px',
                transition : this.state.imgViz && 'height 0.5s'
              }}
            ></div>
            
            <Skills Viz={this.state.imgViz} />

          </div>
        </VizSensor>
      );

  }
}


function Resume(props) {

  return(
    <div id="resume">
      <p  
        style={{
          animation: props.Viz && 'textLeft 0.5s forwards',
          animationDelay: props.Viz && '0.5s',
        }}

      >
        Student in computer science, I'm looking to learn development as well as know more about new technology.

        I started learning Programmation by myself on the internet and I fell in love with it.
        I want to continue on this road and work in software engineering or web development.
               
      </p>
    </div>
  );
}

function Skills(props) {
  return(
    <div id="skills">
      <div className="skillsDiv">
        <p className="top"
          style={{
            animation: props.Viz && 'textRight 0.5s forwards',
            animationDelay: props.Viz && '1s',

          }}
        >
            <label>Languages I speak :</label>
            <ul>
              <li>C</li>
              <li>Python</li>
              <li>Web (HTML, CSS, JS)</li>
              <li>Bootstrap, React, P5.js</li>

            </ul>

        </p>
      </div>
          <div id="hr" style={{
            width : props.Viz ? '80%' : '0',
            transition : props.Viz &&'width 0.5s',
            transitionDelay : props.Viz && '0.5s',

          }}>
          </div>
      <div id="bottomD" className="skillsDiv">
        <p  className="bottom" 
          style={{
            animation: props.Viz && 'textRight 0.5s forwards',
            animationDelay: props.Viz && '1s'
          }}
        > 
          I'm very interested in space and especially the NewSpace industry.
          <br/><br/>
          I'm practicing climbing.

        </p>
      </div>
    </div>
  );
}


class Projects extends React.Component {
  render() {
      return(
        <div id = "Projects">Projects
        </div>
      );


  }
}







class Content extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  render(){
    return(
      <div id="App-content">
          <ArrowBack />
          <div id="contentTop">
            <h2 id="AboutMe-title" onClick={() => this.setState({ count: 1 })}>About Me</h2>
            <h2 id="Project-title" onClick={() => this.setState({ count: 0 })}>Projects</h2>
          </div>
          <div id="ContentMain">
            {this.state.count ? 
              <AboutMe /> :
              <Projects />
            }
          </div>
          <Footer />
      </div>
    );
  }  
}

function Footer() {
    return(
        <div id="App-footer">

        </div>
    );
}

export default App;
