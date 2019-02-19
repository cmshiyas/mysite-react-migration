import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Experience/>
      </div>

    );
  }
}


class Header extends Component {
  render(){
    return (
      <header id="about">
      <a href="ShiyasFullStackDeveloper.docx" download className="btn download">Download CV</a> 
      <nav>
          <a href="#about">About</a>
          <a href="#work">Work Experience</a>
          <a href="#education">Education</a>
          <a href="#technologies">Technologies</a>
          <div className="dropdown">
              <a>Projects</a>
              <div className="dropdown-content">
                <a href="https://cmshiyas.github.io/bouncingballs/" target="_blank">Bouncing Balls</a>
                <a href="https://cmshiyas.github.io/bouncingballs/" target="_blank">NY Times</a>
                  {/* <!-- <a href="#">Link 3</a> --> */}
              </div>
          </div>
          <a href="#contact" >Contact</a>
          <a href="http://blog.cmshiyas.com" target="_blank">Blog</a>
      </nav>
      <div className="content-wrap">
          <img className ="profile-img col-narrow" src="images/shiyasnew.jpeg" alt="Shiyas Cholamukhath"/>
          <div className="col-wide">
              <h1>Shiyas Cholamukhath (CSM)</h1>
              <h2>Full Stack Developer</h2>
              <p>As a developer, I specialize in front-end and backend technlogies with extensive experience in developing
                  end-to-end product with a holistic understadning of Technology stack. Passionate about learning new technologies
                  and spreading my knowledge across various programming languages. I enjoy long distance cycling and running Marathon.</p>
                         </div>
      </div>   
  </header>

    );
  }
}

class Experience extends Component {
  render(){
    return(
      <section className="education" id="education">
      <div className="content-wrap">
          <h2>Education</h2>

          {/* <!-- School details: copy this whole block to add more schools. --> */}
          <h3>BITS Pilani, 2006-2010</h3>
          <p>MS in Software Engineering</p>
          <p>CGPA - 6.75</p>
          
          {/* <!-- Add as many paragraphs as you need. --> */}

          {/* <!-- Graduation Details --> */}
          <h3>Calicut University, 2003-2006</h3>
          <p>Bachelor Of Science in Mathematics</p>
          <p>CGPA - 8.4</p>
          
          {/* <!-- Add as many paragraphs as you need. --> */}

          {/* <!-- End of school details. --> */}
      </div>    
  </section>
    )
  }
}

export default App;
