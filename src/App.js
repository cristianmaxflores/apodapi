import React, { Component } from 'react';
import './App.scss';
import ApodApp from './Components/ApodApp'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="backwall" />
        <div className="m-top">
          <ApodApp className="App" />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
