import React, { Component } from 'react';
import {show} from "./api"
import {withRouter} from "react-router-dom"

class ShowBus extends Component {
    state = { 
        bus:{} 
    }
    componentDidMount(){
        const user = this.props.admin;
        const busId = this.props.match.params.id;
        show(user,busId)
        .then((response) => {
            const showBus = response.data.bus;
            this.setState({
                Bus:showBus 
            })
        })
        .catch((error) => console.log(error))
    }
    render() { 
        return ( 
            <div className="showBus">
                            <div>
                <h1>{this.state.bus.bus_no}</h1>
                <h1>{this.state.bus.status}</h1>
            </div>


            </div>
         );
    }
}
 
export default withRouter(ShowBus);