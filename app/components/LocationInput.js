import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class LocationInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let location = e.target.value;
    this.setState(() => {
      return {
        location: location
      }
    })
  }

  render() {
    return (
      <form className = "form-inline">
        <input
          className = "form-control input"
          type = 'text'
          placeholder = 'Boulder, Colorado'
          onChange = {this.handleChange}
          value = {this.state.location}
        />

        <Link
          className='btn btn-success button'
          disabled= {!this.state.location}
          to={{
            pathname: '/forecast',
            search: '?city=' + this.state.location
          }}>
            Get Forecast
        </Link>
      </form>
    );
  }
}

module.exports = LocationInput;
