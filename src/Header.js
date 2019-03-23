import React from 'react'
export const Header = ()=>
   (
    <header id="about">
    <a href="/docs/ShiyasFullStackDeveloper.docx" download className="btn download">Download CV</a> 
    <nav>
        <a href="#about">About</a>
        <a href="#work">Work Experience</a>
        <a href="#education">Education</a>
        <a href="#technologies">Technologies</a>
        <div className="dropdown">
            <a>Projects</a>
            <div className="dropdown-content">
              <a href="https://cmshiyas.github.io/bouncingballs/" target="_blank">Javascript Objects</a>
              <a href="https://mmfizaan.com/" target="_blank">React & Gatsby</a>
              
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