import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header} from './Header'
import {Experience} from './Experience'
import {Education} from './Education'
import {Technologies} from './Technologies'
import {Footer} from './Footer'

class App extends Component {
  
  state = {
    loading: false,
    positions: [],
    qualificationsList: []
  }


  render(){

    return(
      <div>
      <Header/>
      <Experience/>}
      <Education/>
      <Technologies/>
      <Footer/>
      </div>
    )
  }

}

export default App;
