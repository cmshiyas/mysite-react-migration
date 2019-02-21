import React, {Component} from 'react'
export class Experience extends Component {
    
    state = {
      loading: false,
      positions: []
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
        <section className="work" id="work">
        <div className="content-wrap">
            <h2>Work Experience</h2>
            {this.state.loading? 'loading..':          <div> 
              {this.state.positions.map( exp => 
                 (
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
            )}
              </div>
   }
        </div>
        </section>
     
      )
    }
  }
  

