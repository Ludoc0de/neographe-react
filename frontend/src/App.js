import React from 'react'
//import HeaderFooter from './components/HeaderFooter';
import MainContent from './components/MainContent';
import Login from './components/Login';
//
import { 
  BrowserRouter as Router,  
  Switch,
  Route
 } from "react-router-dom"

class App extends React.Component {
  /*
  constructor() {
    super();
  }
  */

  render() {
    return (
      <Router>
        <Switch>
          {/* change this path acces when online */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <div className='App-div'>
              {/* <HeaderFooter /> */}
              <MainContent />
            </div >
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App