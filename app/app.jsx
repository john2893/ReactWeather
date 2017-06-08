var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var WeatherMessage = require('WeatherMessage');
var city = '';

//var Route = require('react-router').Route



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
      <WeatherMessage city={city}/>


    </Route>

  </Router>,
  document.getElementById('app')
);
