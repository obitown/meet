import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';



class App extends Component {
  state = {
    events: []
  }

  render() {

    return (
      <div className="App">
        <EventList events={this.state.events} />
        <CitySearch />
        <NumberOfEvents />
      </div>
    )
  }
}

export default App;
