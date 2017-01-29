import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import $ from 'jquery'; // ;_(

var images = ["ethan.gif", "kitten.gif", "pencil.gif", "pokefight.gif"];
var resources = [];
for(var idx in images){
    var img = images[idx];
    var resource = require("../../../static/images/"+img);
    resources.push(resource);
}


export default class Gallery extends React.Component {
    static propTypes = {
    }
    state = {
	swapTime: 5,
	last: 0,
	uid: (("gallery_" + Math.random()).replace(".", "")),
	current_image: resources[0]
    }
    swap(){
	this.setState({
	    last: this.state.last + 1,
	    opacity: 1.0, //Math.random(),
	    current_image: resources[(this.state.last + 1) % (resources.length)]
	});
    }
    componentDidMount(){
	setInterval(this.swap.bind(this), this.state.swapTime * 1000);
    }
    render(){
	return <div className={this.uid}>
	  <img style={{"width": "100%", "position": "absolute", "top": "50%", "left": "50%", "opacity": this.state.opacity}} src={this.state.current_image} />
	</div>;
    }
}