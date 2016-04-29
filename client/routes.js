/*
/* index now sends requests to routes.js */
/* routes.js now imports APP, instead of index.js */
/* Route matches url to comoponent */
/* ie path "/" goes to App component */

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './containers/app.jsx';

/* make sure index.js knows about / path using App component */
/* by exporting it.. */
export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostsIndex} />
  </Route>
);
/* Now that have a nested route (IndexRoute), */
/*  need to remember to add this.props.children */
/*  to App component's render method (in app.js) */
  /* ie: google.com ==> renters App */

/*
/* If a module defines a default export: */

 /*   module "foo" { */
      /* export default function() { console.log("hello!") } */
  /* } */
/*
/* index now sends requests to routes.js */
/* routes.js now imports APP, instead of index.js */
/* Route matches url to comoponent */
/* ie path "/" goes to App component */

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

/* make sure index.js knows about / path using App component */
/* by exporting it.. */
export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostsIndex} />
  </Route>
);
/* Now that have a nested route (IndexRoute), */
/*  need to remember to add this.props.children */
/*  to App component's render method (in app.js) */
  /* ie: google.com ==> renters App */

/*
/* If a module defines a default export: */

 /*   module "foo" { */
      /* export default function() { console.log("hello!") } */
  /* } */

 /* then you can import that default export by omitting the curly braces: */

 /*  import foo from "foo"; */
  /* foo(); // hello! */

 /* */



 /* then you can import that default export by omitting the curly braces: */

 /*  import foo from "foo"; */
  /* foo(); // hello! */

 /* */


