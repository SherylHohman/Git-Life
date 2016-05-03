import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './containers/app';
// import SplashPage from './containers/app';
// import SplashPage from './containers/splashPage';

/* imported by index.js, so it knows about our routes */

export default (
  <Route path="/" component={App}>
  </Route>
);
   /* <IndexRoute component={SplashPage} /> */

  /* add additional pages below"<IndexRoute.. /> using the format below:" */
  /* <Route path="newPath" component={newPageComponent} /> */
