/*Setting Context in place*/

import React, {Component} from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
   switch(action.type) {
       case 'DELETE_CONTACT' :
       return {
           contacts: state.contacts.filter(contact =>
            contact.id !== action.payload)
        };
       case 'ADD_CONTACT' :
           return {
               contacts: [action.payload, ...state.contacts]
        }
       default:
       return state;
   }
}

export class Provider extends Component { 
    state = {
     contacts : [ 
        { 
            id: 1,
            nom : 'Eric Lamotte',
            email : 'e.lamotte@live.fr',
            tel : '07 09 00 44 00'
        },
        {
            id: 2,
            nom : 'David Marc',
            email : 'dmarc@orange.fr',
            tel : '06 50 00 02 77'
        },
        {
            id: 3,
            nom : 'Michèle Lee',
            email : 'michlee@gmail.com',
            tel : '06 06 77 00 99'
        }
     ],
     dispatch: action => {
         this.setState(state => reducer(state, action))
     }
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;