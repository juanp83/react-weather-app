import React from 'react';
import LocationInput from './LocationInput';
import Forecast from './Forecast';
import Home from './Home';
import {Link} from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/forecast' component={Forecast} />
            <Route render={ () => {
              return <p>Page Not Found</p>
            }}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

const Header = () => {
    return (
      <div className='header'>
        <Link
          to={{pathname: '/'}}
          ><h1>Local Weather</h1></Link>
        <LocationInput/>
      </div>
    )

}

module.exports = App;
