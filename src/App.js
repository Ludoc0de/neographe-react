import React from 'react'
import HeaderFooter from './components/HeaderFooter';
import MainContent from './components/MainContent';


class App extends React.Component {
  /*
  constructor() {
    super();
  }
  */

  render() {
    return (
      <div className='App-div'>
        <HeaderFooter />
        <MainContent />
      </div >
    )
  }
}

export default App