import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var experiences = [
  {"id": 1, "title": "Delivery Lead", "company":"Tabcorp", "startDate":"Oct 2018", "endDate": "Present", 
      "contributions":[
          { "id":"1","contri":"Delivery lead"}
          ]
  },
  {"id": 2, "title": "Team Lead", "company":"Tabcorp", "startDate":"May 2018", "endDate": "Oct 2018",
      "contributions":[
          { "id":"1","contri":"Team lead"}
          ]
  },
  {"id": 3, "title": "Lead Technical Engineer", "company":"JXT GLOBAL", "startDate":"October 2017", "endDate": "May 2018",
  "contributions":[
      { "id":"1","contri":"Triage support ticket, prioritize and delegate to the team"},
      { "id":"2","contri":"Design and development of new modules, enhancements or change request on the exiting platform using front end technologies like HTML5, CSS3, Sass, Less, JavaScript & JQuery"},
      { "id":"3","contri":"Development & Enhancement of single page application & Mobile friendly website"},
      { "id":"4","contri":"Work on backend technologies like PHP & MySQL database"},
      { "id":"5","contri":"Work on AWS S3, Cpanel hosting, Wordpress CMS"},
      { "id":"6","contri":"Analysis and resolution of support tickets within given SLA."},
      { "id":"7","contri":"Implementation of Agile engineering practices"},
      { "id":"8","contri":"Defining and implementation of development and release workflow"},
      { "id":"9","contri":"Mentoring team on SCRUM Manifesto and adopting SCRUM Practices in the organization"}
      ]
},
{"id": 4, "title": "Technical Support Analyst", "company":"JXT Global", "startDate":"August 2017", "endDate": "Oct 2017",
"contributions":[
  { "id":"1","contri":"Triage support ticket, prioritize and delegate to the team."},
  { "id":"2","contri":"Triage support ticket, prioritize and delegate to the team."},
  { "id":"3","contri":"Triage support ticket, prioritize and delegate to the team."}

  ]
},
{"id": 5, "title": "Senior Technical Lead", "company":"MetricStream Infotech", "startDate":"May 2018", "endDate": "Oct 2018",
"contributions":[
  { "id":"1","contri":"Triage support ticket, prioritize and delegate to the team."},
  { "id":"2","contri":"Triage support ticket, prioritize and delegate to the team."},
  { "id":"3","contri":"Triage support ticket, prioritize and delegate to the team."}
  ]
}
  ];

  var qualification = [
    {
      university: "BITS Pilani",
      year: "2006-2010",
      course: "MS in Software Engineering"
    },
    {
      university: "Calicut University",
      year: "2003-2006",
      course: "Bachelor of Science in Mathematics"
    }
  ]

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Experience/>
      <Education/>
      <Technologies/>
      <Footer/>
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
      <section className="work" id="work">
      <div className="content-wrap">
          <h2>Work Experience</h2>
          <div> 
            {experiences.map( (exp) => {
              return (
                <div key={exp.id}>

                    <div className="col-narrow">
                        <h3>{exp.title}</h3>
                        <p className="uppercase">{exp.company}</p>
                        <p>{exp.startDate} to {exp.endDate}</p>
                    </div>
                        <div className="col-wide job-description">
                            <p>Key Contributions</p>
                                <ul>
                                    {exp.contributions.map( (data) => {
                                        return (<li key={data.id}>{data.contri}</li>)
                                    })}
                                </ul>
                        </div>
                    </div>

                
              )
          })}
            </div>
      </div>
      </section>
    )
  }
}

class Education extends Component {
  render(){
    return(
      <section className="education" id="education">
      <div className="content-wrap">
          <h2>Education</h2>

          {/* <!-- School details: copy this whole block to add more schools. --> */}
          {
            qualification.map( (el) => {
              return (
                <div key = {el.id}>
                <h3>{el.university}</h3>
                <p>{el.year}</p>
                <p>{el.course}</p>
                <br/>
                </div>
              )
            }) 
          }

      </div>    
  </section>
    )
  }
}

class Technologies extends Component {
  render(){
    return(
      <section className="tecnnologies container" id="technologies">
      <div className="content-wrap">
          <h2>Technologies & Tools</h2>
      </div>
      
                   <div className="row">
                      <div className="col-xs-6 col-lg-offset-1 col-sm-4 col-lg-3 col-md-3"><img src="images/technologies/HTML5.png" alt=""/></div>
                      <div className="col-xs-6 col-lg-offset-1 col-sm-4 col-lg-3 col-md-3"><img src="images/technologies/CSS3.png" alt=""/></div>
                      <div className="clearfix visible-xs-block"></div>   
                      
                      <br className="visible-xs-block"/>                 
                      <br className="visible-xs-block"/>

                      <div className="col-xs-6 col-lg-offset-1 col-sm-4 col-lg-3 col-md-3"><img src="images/technologies/JavaScript.png" alt=""/></div>   
                      <div className="clearfix visible-lg-block"></div>   
           
                      <div className="col-xs-6 col-lg-offset-1 col-sm-4 col-lg-3 col-md-4"><img src="images/technologies/Bootstrap.png" alt=""/></div>
                      <div className="clearfix visible-xs-block"></div>   

                      <br className="visible-xs-block"/>                 
                      <br className="visible-xs-block"/>

                      <div className="col-xs-6  col-lg-offset-1 col-sm-4 col-lg-3 col-md-4"><img src="images/technologies/AngularJS.png" alt=""/></div>
                      <div className="col-xs-6 col-lg-offset-1 col-sm-4 col-lg-3 col-md-4"><img src="images/technologies/jQuery.png" alt=""/></div>
                      <div className="clearfix visible-lg-block"></div>   

                      <br className="visible-xs-block"/>                 
                      <br className="visible-xs-block"/>

                      <div className="col-xs-6 col-lg-offset-1 col-sm-4 col-lg-3 col-md-4"><img src="images/technologies/Git.png" alt=""/></div>
                      <div className="col-xs-6 col-lg-offset-1 col-sm-4 col-lg-3 col-md-4"><img src="images/technologies/MongoDB.png" alt=""/></div>
                      <div className="clearfix visible-xs-block"></div>   

                      <br className="visible-xs-block"/>                 
                      <br className="visible-xs-block"/>
                      
                      <div className="col-xs-6 col-lg-offset-1 col-sm-4 col-lg-3 col-md-4 hidden-xs"><img src="images/technologies/AmazonWebServices.png" alt=""/></div>
                  </div>
      {/* <!-- content-wrap    --> */}
  </section>
    )
  }
}

class Footer extends Component {
  render(){
    return(
      <footer id="contact">
      <div className="content-wrap">            
          <h2>Lets keep in touch!</h2>
          
          {/* <!-- Social media and contact links. Add or remove any networks. --> */}
          <div className="contact-info">
              <a href="mailto:cmshiyas007@gmail.com">cmshiyas007@gmail.com</a>
              <a href="http://cmshiyas.com" target="_blank">cmshiyas.com</a>
              <a href="https://twitter.com/cmshiyas" target="_blank">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <span className="sr-only">Twitter</span>
              </a>
              
              <a href="https://www.linkedin.com/in/cmshiyas/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i>
                  <span className="sr-only">LinkedIn</span></a>
              <a href="https://www.facebook.com/cmshiyas" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i>
                  <span className="sr-only">facebook</span></a>
                  <a href="https://github.com/cmshiyas" target="_blank"><i className="fa fa-github" aria-hidden="true"></i>
                      <span className="sr-only">github</span></a>
          </div>

          <p>Copyright 2017 by Shiyas Cholamukhath</p>
      </div>    
  </footer>
    )
  }
}

export default App;
