import React, {Component} from 'react';
import Chartprop from '../Rechart/ClassChart';


class Flexchart extends Component {
    constructor(props) {
        super(props);
        this.state={
      classlist: []
        }
      }

      componentDidMount() {
        this.setState({classlist: this.props.Data}, () => {

            {this.state.classlist.map(clss => 

                <Chartprop Data={clss} />,
                console.log('HIT')
                
                
            
            )}
            this.setState({classlist: this.state.classlist})
        })
        
    
        }
      render() {

    
   
    return(
    
    <div style={{display: 'flex'}}>
       {this.state.classlist}
        </div>
    )
      }
}
export default Flexchart