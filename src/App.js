import React, { Component} from 'react'
import'bootstrap/dist/css/bootstrap.min.css'
import Header from './composants/Header'
import Liste from './composants/Liste'
import {Provider} from './context'
import AddContact from './composants/contact/AddContact'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import APropos from './composants/APropos'
import Erreur from './composants/Erreur'




class App extends Component {

render(){ 
    return (

    /*Wrapping with Provider */
     <Provider>
       <Router>
          <div className="App">
          <Header />
          <div className="Container">
          <Switch>
          <Route exact path="/ajoute" component={AddContact}/>
          <Route exact path="/liste" component={Liste}/>
          <Route exact path="/" component={Liste}/>
          <Route exact path="/apropos" component={APropos}/>
          <Route component={Erreur}/>
          </Switch>
          </div>
          </div>
        </Router>
     </Provider>
    );
  }
}

export default App;
