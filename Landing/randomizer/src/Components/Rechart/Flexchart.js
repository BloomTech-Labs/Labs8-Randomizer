import React, {Component} from 'react';
import Chartprop from '../Rechart/ClassChart';


class Flexchart extends Component {
    constructor(props) {
        super(props);
        this.state={
      renderclasslist : []
        }
      }

      componentWillReceiveProps(nextProps) {
            console.log('dates',nextProps.Dates)
            if (nextProps.Dates.length === this.props.Dates.length){
                return
            }
            else{
            nextProps.Dates.map((clss) => {
                console.log('clss', clss)
                this.state.renderclasslist.push(<Chartprop Data={clss} history={this.props.history} />)
                console.log('HIT')
            })
            this.setState({renderclasslist: this.state.renderclasslist})
        }}
    
    render() { 

        
        return(
    
    <div style={{display: 'flex'}}>
       {this.state.renderclasslist}
        </div>
    )
      }
        }
export default Flexchart