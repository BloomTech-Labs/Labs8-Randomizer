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
 background-color: rgba(255,255,255,.9);

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
 margin-top: 15px;
 width: 200px;
 height: 75px;
 border: none;
 display: block;
 font-family:'Raleway', sans-serif;
 cursor: pointer;
 transition: .5s;
 background-color: #032323;
 color: white
 margin-left: 5px;
 z-index: +1;
position: absolute;
top: 0;
 :hover {
     background-color: black;
 }
 @media (max-width: 400px) {
    width: 110px;
    height: 130px;
    font-size: 12px;
  }
  @media (max-width: 768px) {
    width: 100px;
    height: 60px;
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
           info: [],
           isLoading: true
       }
    }

    componentWillMount() {
        this.handleClass()
        if (localStorage.getItem("studentID")) {
            localStorage.removeItem("studentID")
          }
          if (localStorage.getItem("classID")) {
            localStorage.removeItem("classID")
          }

    }

    handleClass = e => {
        console.log('viewclass props, history', this.props.history)
        this.setState({ info: [] })

      const token =localStorage.getItem('jwt').toString();
        axios
          .get('https://labs8randomizer.herokuapp.com/clss/get_everything',  {
              headers: {
                  'Authorization':'Token '.concat(token)
              }
          })

            .then(res => {

              console.log('resdata',res.data)

              var classes = res.data['clss']
              console.log('0th', classes[0])
              classes.map(clss => {

                  this.setState({info : [...this.state.info, clss]})

                  console.log('state after set state', this.state.info)
              })
               this.setState({isLoading: false})

              // console.log('handleclass')
              // console.log('classP', this.state.P)
            })
            return
        }
handleAdd = () => {
    if (localStorage.getItem("classID")) {
        localStorage.removeItem("classID")
      }
}

    render() {
        return (
    <div>
    { this.state.isLoading &&
    <div>Loading.. please wait!</div>
    }
    { !this.state.isLoading &&
    <div>
<React.Fragment>
<Link to='/Class' style={{height: '75px'}} onClick={this.handleAdd}>
            <Addclass>
               <H1>Add a Class</H1>
            </Addclass>
          </Link>
        <Classdiv style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
       
         

         <Flexchart Dates={this.state.info} history={this.props.history} ></Flexchart>


            {/* <Chartprop  Data={this.state.info}/> */}


        </Classdiv>
        </React.Fragment>

     </div>
    }
  </div>
        )

    }

}
export default ViewClass;
