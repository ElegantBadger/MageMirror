import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

require("../../css/main.scss");

class App extends React.Component {
    render(){
	return <div>
	  <marquee>Your muffins are my muffins</marquee>
	  {this.props.children}
	</div>
    }
}

class Home extends React.Component {
    render(){
	return <div>
	<h2>You are home now my sweet little manatee</h2>
	</div>
    }
}

/* Router component */
export default class AppRouter extends React.Component {
    render(){
	return (
            <Router history={browserHistory}>
	    <Route path="/" component={App}>
    	      <IndexRoute component={Home}/>
            </Route>
	    </Router>
    );
  }
}
