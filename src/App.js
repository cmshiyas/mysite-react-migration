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

  componentDidMount(){
    this.setState({loading: true})
    fetch('http://localhost:3001/positions')
    .then( data => data.json())
    .then( json => json.positions)
    .then( positions => this.setState({positions, loading: false}))
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
