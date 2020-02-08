import React, { Component } from 'react'
import Contact from './composants/Contact'
import {Consumer} from './context'
import './style.css'

export default class Liste extends Component {
   render() {
        return(
            /*Wrapping with Consummer*/
            <Consumer>
                {value => {
                    return(
                        <React.Fragment>
                         <div class="container">
                            <h1 className="col-sm text-center"
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
                        </div>
                        </React.Fragment> 
                    )
                }}
            </Consumer>
        )
      }
}
