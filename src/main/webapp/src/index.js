
require('./assets/styles/bootstrap.min.css');
require('./assets/styles/font-awesome.min.css');

require('./assets/styles/etline-font.css');
require('./assets/styles/flexslider.css');
require('./assets/styles/ie.css');
//require('./assets/styles/jquery.fancybox.css');
require('./assets/styles/normalize.min.css');
require('./assets/styles/print.css');
require('./assets/styles/normalize.min.css');
//require('./assets/styles/queries.css');
require('./assets/styles/styles.css');

require('./assets/styles/main.css');

import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

var React = require('react');
var ReactDOM = require('react-dom');

var Home = require('./app/pages/home');
var About = require('./app/pages/about');

ReactDOM.render(
  (
	<Router history={hashHistory}>
	  <Route path="/" >
	  	<IndexRoute component={Home} />
	  	<Route path="home" component={Home}/>
	    <Route path="about" component={About}/>
	    <Route path="*" component={Home} />
	  </Route>

	</Router>
   ), 
  document.getElementById('view'));

