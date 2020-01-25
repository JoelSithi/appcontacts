import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../context'

export default class Liste extends Component {
   render() {
        return(
            /*Wrapping with Consummer*/
            <Consumer>
                {value => {
                    return(
                        <React.Fragment>
                            <h1 className="alert alert-primary text-center"
                                role="alert">Nos contacts : 
                            </h1>
                            {value.contacts.map(contact => (
                            < Contact
                            key={contact.id}
                            id={contact.id}
                            nom={contact.nom}
                            email={contact.email}
                            tel={contact.tel}
                            />
                        ))}
                        </React.Fragment> 
                    )
                }}
            </Consumer>
        )
      }
}
