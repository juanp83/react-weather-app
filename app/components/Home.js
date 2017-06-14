import React from 'react';
import LocationInput from './LocationInput';


const Home = () => {
    let style = {

    }

    return (
      <div className='home-container'>
        <h2>Enter a City and State</h2>
        <LocationInput />
      </div>
    )
}

module.exports = Home;
