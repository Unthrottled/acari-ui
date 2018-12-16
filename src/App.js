import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a className="App-link"
                 href="https://reactjs.org"
                 target="_blank"
                 rel="noopener noreferrer"
              >
                Me me big boy
              </a>
            </header>
          </div>
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
