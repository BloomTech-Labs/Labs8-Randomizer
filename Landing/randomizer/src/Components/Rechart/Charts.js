//Libraries
import React, {Component} from 'react';
import styled from 'styled-components';


// Components
import Chartprop from './ClassChart';
import StudentChart from './StudentChart';


const Homediv = styled.div`
width: 500px;
height: 300px;
background-color: none;
display: flex;
justify-content: center;
flex-wrap: wrap;
border-radius: 4px;
align-items: center;
`


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            mass: [],
            height: [],
            starwarsChars: [],
            names: [],
           
        }
    }
    componentDidMount() {
        this.getCharacters('https://swapi.co/api/people/');
      }
    
      getCharacters = URL => {
    
        fetch(URL)
          .then(res => {
            return res.json();
          })
          .then(data => {
            this.setState({ starwarsChars: data.results});
           
            this.setState({height: this.state.starwarsChars.map((char => {
               return char.height
            }))})
            this.setState({mass: this.state.starwarsChars.map((char => {
                return char.mass
             }))})
             this.setState({names: this.state.starwarsChars.map((char => {
                return char
             }))})
         
            console.log('names',this.state.names)
            console.log('mass', this.state.mass)
          })
          .catch(err => {
            throw new Error(err);
          });
      };
     
    render() {
        
        return (
            <Homediv>
            {/* <Chartprop students={this.state.names}/> */}

           
            
            <StudentChart numbers={this.state.mass}/>
         
            </Homediv>
            

        )
        
    }
}
export default Chart;