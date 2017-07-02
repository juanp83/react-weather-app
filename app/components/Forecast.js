import React from 'react';
import api from '../utils/api';
import queryString from 'query-string';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: null,
      location: null
    };

    this.apiUpdate = this.apiUpdate.bind(this);
  }

  apiUpdate(location){
    api.fetchForecast([
      location.city
    ]).then((results) => {
        this.setState(() => {
          return {
            forecast: results,
            location: location.city
          }
        })
      });
  }

  componentDidMount(){
    let location = queryString.parse(this.props.location.search)
    this.apiUpdate(location);
  }

  componentWillReceiveProps(nextProps){
    let location = queryString.parse(nextProps.location.search)
    this.apiUpdate(location);
  }

  render() {
    return (
      <div>
        {!this.state.forecast ? <div className="sk-cube-grid">
  <div className="sk-cube sk-cube1"></div>
  <div className="sk-cube sk-cube2"></div>
  <div className="sk-cube sk-cube3"></div>
  <div className="sk-cube sk-cube4"></div>
  <div className="sk-cube sk-cube5"></div>
  <div className="sk-cube sk-cube6"></div>
  <div className="sk-cube sk-cube7"></div>
  <div className="sk-cube sk-cube8"></div>
  <div className="sk-cube sk-cube9"></div>
</div> : <Days location={this.state.location} forecast={this.state.forecast}/>}
      </div>
    )
  }
}

const Days = (props) => {
  let forecast = props.forecast;
  let d = new Date();
  let today = d.getDay();
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  console.log(forecast);
  return (
    <div>
      <h2 className="days-header text-center">{props.location}</h2>
      <br />
      <ul className='day-list'>
        {forecast.map((day) => {
          if (today === 6){
            today = 0;
          } else {
            today++
          }
          return (
            <li className='day card card-2'
              key={days[today]}
              >
                <h2>{days[today]}</h2>
                <img src={'app/images/' + day.weather[0].icon + '.svg'}/>
                <p>{day.weather[0].description}</p>
                <p>Temp: {day.temp.day}℉</p>
                <p>Humidity: {day.humidity}%</p>
                <p>Wind: {day.speed} mph</p>
              </li>
          )
        })}

      </ul>
    </div>
  )
}

module.exports = Forecast;
