import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Thing from './Thing'
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline>
        <Thing></Thing>
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
