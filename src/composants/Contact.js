/*Contact Interface Creation*/

import React, { Component } from 'react'
import {Consumer} from '../context'

export default class Contact extends Component {

    /* Show-Hide*/ 
    state = {
        show : false
    }
 
    /*Delete*/ 
    supprimeContact = (id, dispatch) => {
        /*linking Component event to dispatch*/
        dispatch({type: 'DELETE_CONTACT', payload: id})
    }

    /*Show*/
    montrerContact = () => {
        this.setState({
            show : !this.state.show
        })
    }

    render() {
        return(
            <Consumer>
                {value => {
                    return (
                        <div className="btn btn-block btn-success">
                            <h4> {this.props.nom}&nbsp; <i style={{cursor: 'pointer'}} className="fas fa-arrow-circle-down"
                                  onClick={this.montrerContact} ></i>
                                  <i className="fas fa-times" style={{cursor: 'pointer', float:'right', color:'red'}} 
                                  onClick={() => this.supprimeContact(this.props.id, value.dispatch)} ></i>
                            </h4>
                                {this.state.show ? ( 
                                <ul className="card card-body mb-3">
                                    <li className="list-group-item list-group-item-action list-group-item-info">
                                        Email : {this.props.email}
                                    </li>
                                    <li className="list-group-item list-group-item-action list-group-item-info">
                                        Téléphone : {this.props.tel}
                                    </li>
                                </ul>
                             ) : null }       
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
