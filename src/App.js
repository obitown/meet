import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';




class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: "all",
    numberOfEvents: 15,
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      {
        numberOfEvents,
      },
      this.updateEvents(this.state.location, numberOfEvents)
    );
  };
  render() {
    const { events, locations, numberOfEvents } = this.state;
    return (
      <div className="App">
        <CitySearch
          locations={locations}
          updateEvents={this.updateEvents}
        />
        <EventList
          events={events}
          numberOfEvents={numberOfEvents}
        />
        <NumberOfEvents
          updateNumberOfEvents={(number) => {
            this.updateNumberOfEvents(number);
          }}
        />

      </div>
    )
  }
}

export default App;
