import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import Gallery from './Gallery';

require("../../css/main.scss");

class App extends React.Component {
    render(){
	return <div>

	  {this.props.children}
	</div>
    }
}

class Home extends React.Component {
    render(){
	return <div className="root">
	<div className="overlay">
	<marquee>Your muffins are my muffins</marquee>	
	<h2>Jeremy is my deep deep mucousy boy</h2>
	</div>
	<Gallery />
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
