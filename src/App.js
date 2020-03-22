import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  /*
  constructor() {
    super();
  }
*/
  render() {
    return (
      <div className='App-div'>
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App