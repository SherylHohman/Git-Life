import React, {Component} from 'react';

/* Most of the code that Was here before react-router */
/* now resides in splash.jsx, our splash page */

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Git-Life</h1>
        {this.props.children}
      </div>
    );
  }
}
