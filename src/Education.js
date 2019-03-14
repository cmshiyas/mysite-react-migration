import React , {Component} from 'react'

export class Education extends Component{

      
    state = {
      loading: false,
      qualifications: []
    }
  
    componentDidMount(){
      this.setState({loading: true})
      fetch('https://mysite-positions/.herokuapp.com/qualifications')
      .then( data => data.json())
      .then( json => json.qualificationsList)
      .then( qualifications => this.setState({qualifications, loading: false}))
    }
  
    render(){
      return(
      <section className="education" id="education">
        <div className="content-wrap">
            <h2>Education</h2>
  
            {/* <!-- School details: copy this whole block to add more schools. --> */}
            {
              this.state.qualifications.map( (education) => {
                return (
                  <div key = {education.id}>
                  <h3>{education.university}</h3>
                  <p>{education.year}</p>
                  <p>{education.course}</p>
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