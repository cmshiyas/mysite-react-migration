import React, {Component} from 'react'


export const Footer = () => 
  (
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
