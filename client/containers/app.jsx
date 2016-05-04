import React, {Component} from 'react';

/* Most of the code that Was here, now resides in splash.jsx, as our splash page */
/* Any elements that you want to appear across all "pages"/"routes" */
/*   get put in here. ie a nav-bar, header, logo, footer,, */

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>Git-Life</h3>
        {this.props.children}
      </div>
    );
  }
}
