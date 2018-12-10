import React, {Component} from 'react';
import Chartprop from '../Rechart/ClassChart';


class Flexchart extends Component {
    constructor(props) {
        super(props);
        this.state={
      renderclasslist : [],
      isLoading: true

        }
      }

      componentDidMount() {
           
            
                this.setState({renderclasslist: []},() => {
                    this.props.Dates.map((clss) => {
                        console.log('clss', clss)
                        this.state.renderclasslist.push(<Chartprop Data={clss} history={this.props.history} />)
                        console.log('HIT')
                    })
                    this.setState({isLoading:false})
                })
            
            this.setState({renderclasslist: this.state.renderclasslist})
        }
    
    render() { 

        
        return(
    <div>
    { this.state.isLoading &&
    <div>Loading.. please wait!</div>
    }
    {!this.state.isLoading && <div style={{display: 'flex'}}>
       {this.state.renderclasslist} </div>}
        </div>
    
      ) 
        }
    }
export default Flexchart