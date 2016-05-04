/* index.js imports this file, so it knows about our routes */
import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './containers/app';
import SplashPage from './containers/splashPage';
/*import Splash from './containers/splash';*/

export default (
  <Route path="/" component={App} >
    <IndexRoute component={SplashPage} />
  </Route>
);
    /*<IndexRoute component={SplashPage} />*/

  /* add new paths below"<IndexRoute.. /> using following format:" */
  /* <Route path="newPath" component={newPath} /> */

