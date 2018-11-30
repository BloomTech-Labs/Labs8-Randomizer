//Libraries
import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { YAxis, XAxis, CartesianGrid, BarChart,  Bar, Tooltip, Legend} from 'recharts';
// Icons
import Add from '@material-ui/icons/LibraryAdd';

//Components

import Flexchart from '../Rechart/Flexchart';
import Chartprop from '../Rechart/ClassChart';

 const Classdiv = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;


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
 :hover {
     background-color: black;

 }
 `
const H1 = styled.h1`
color: cyan;
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
    }
   
    handleClass = e => {
            
        axios
          .get('http://localhost:8000/clss/get_everything',  {
              headers: { 
                  'Authorization': 'Token 6374f12dc312afc256d2c3f52249ef5211d38913'
              }
          })

          .then(res => {

            console.log('resdata',res.data)
            
            var classes = JSON.parse(res.data)   
            console.log('typetest', typeof classes)
            classes.map(name => {
            this.state.Classarray.push(name)
               
            })
            console.log('stateclass',this.state.Classarray)
            
            this.state.Classarray.map(cl => {
                this.state.classnames.push(cl['className'])
            })
            this.state.Classarray.map(item => {
                this.state.info.push(item['studentsInfo'])
            })
            console.log('info', this.state.info)
            console.log('onename', this.state.info[0][0]['studentName'])
            this.setState({truenames: Object.values(this.state.classnames)})
            console.log('names',Object.values(this.state.classnames) )
            // console.log('handleclass')
            // console.log('classP', this.state.P)
          })
          
          .catch(err => {
            
          });
          
      };
      
    
      
     
    render() {
        
        return (
           <Classdiv>
        
            <Flexchart Dates={this.state.info}></Flexchart>
               
               
               {/* <Chartprop  Data={this.state.info}/> */}
               
               
              <Addclass>
                  <Add style={{fontSize: '100px'}}> </Add> <H1>Add a Class</H1>
             </Addclass>

           </Classdiv>

        )
        
    }
}
export default ViewClass;