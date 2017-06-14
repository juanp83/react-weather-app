import React from 'react';
import PropTypes from 'prop-types'

class LocationInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let location = this.target.value;
    this.setState(() => {
      return {
        location: location
      }
    })
  }

  handleSubmit(){
    event.preventDefault();
  }

  render() {
    return (
      <form className = "form-inline" onSubmit={this.handleSubmit}>
        <input
          className = "form-control input"
          type = 'text'
          placeholder = 'Boulder, Colorado'
          onChange = {this.handleChange}
          value = {this.state.location}
        />
        <button
          className='btn btn-success button'
          type='submit'
          >Get Weather</button>
      </form>
    );
  }
}

module.exports = LocationInput;
