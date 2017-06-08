var React = require('react');

var WeatherMessage = ({temp,location}) =>{
  return (
    <div>
      <h1> Its {temp} in {location}</h1>
    </div>

  );

};
module.exports = WeatherMessage;
