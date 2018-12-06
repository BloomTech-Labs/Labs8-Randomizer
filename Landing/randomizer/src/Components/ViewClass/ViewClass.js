//Libraries
import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios'
import {Link} from 'react-router-dom';
import { YAxis, XAxis, CartesianGrid, BarChart,  Bar, Tooltip, Legend} from 'recharts';
// Icons
import Add from '@material-ui/icons/LibraryAdd';

//Components

import Flexchart from '../Rechart/Flexchart';
import Chartprop from '../Rechart/ClassChart';

import '../ViewClass/Add.css'

 const Classdiv = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 width: 900px;
 
 justify-content: flex-start;
 background-color: rgba(255,255,255,.8);
 
border: 3px solid #dfece6;
border-radius: 5px;
@media (max-width: 1024px) {

    
    width: 700px;
  }
@media (max-width: 400px) {
    width: 200px;
    height: 200px;
    justify-content: center;
    position: absolute;
    border: none;
    background-color: none;
    margin-left: 25px;
  }

 `
 const Addclass = styled.button`
 width: 200px;
 height: 200px;
 border: none;
 border-radius: 8px;
 cursor: pointer;
 transition: .5s;
 background-color: #032323;
 color: white
 margin-top: 5px;
 margin-left: 5px;
 :hover {
     background-color: black;

 }
 @media (max-width: 400px) {
    width: 110px;
    height: 130px;
    font-size: 12px;
  }
 `
const H1 = styled.h1`
color: white;
@media (max-width: 400px) {

    font-size: 14px;
  }
`
const H2 = styled.h1`
color: black;
position: absolute;
margin-left: 5px;

`

const Title = styled.div`
display: flex;
`
class ViewClass extends Component {
    constructor(props) {
        super(props);
       this.state={
           Classarray: [],
           classnames: [],
           placehold: [1, 2, 3, 4],
           truenames: [],
           info: []
       }
    }

    componentDidMount() {
        this.handleClass()
        if (localStorage.getItem("studentID")) {
            localStorage.removeItem("studentID")
          }
    }

    handleClass = e => {


      const token =localStorage.getItem('jwt').toString();
        axios
          .get('https://labs8randomizer.herokuapp.com/clss/get_everything',  {
              headers: {
                  'Authorization':'Token '.concat(token)
              }
          })
  
            .then(res => {
  
              console.log('resdata',res.data)
  
              var classes = JSON.parse(res.data)
              console.log('typetest', typeof classes)
              classes.map(name => {
              this.state.Classarray.push(name)
  
              })
              console.log('Classarray',this.state.Classarray)
  
              this.state.Classarray.map(cl => {
                  this.state.classnames.push(cl['className'])
              })
              this.state.Classarray.map(item => {
                  this.state.info.push(item)
                  this.setState({info: this.state.info})
              })
              console.log('info', this.state.info)
              this.setState({truenames: Object.values(this.state.classnames)})
              console.log('names',Object.values(this.state.classnames) )
              // console.log('handleclass')
              // console.log('classP', this.state.P)
            })
        }
handleAdd = () => {
    if (localStorage.getItem("classID")) {
        localStorage.removeItem("classID")
      }
}

    render() {

        return (


           <Classdiv>
               
            <Link to='/Random' style={{height: '200px'}}>
            <Flexchart Dates={this.state.info} Classes={this.state.Classarray}></Flexchart>
            </Link>
               
               {/* <Chartprop  Data={this.state.info}/> */}
               
               <Link to='/Class' style={{height: '200px'}} onClick={this.handleAdd}>
              <Addclass>
                  <Add className='plus' style={{fontSize: '100px'}}> </Add> <H1>Add a Class</H1>
             </Addclass>
             </Link>

           </Classdiv>

        )

    }
}
export default ViewClass;