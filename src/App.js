import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { OfflineAlert } from './Alert'




class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: "all",
    numberOfEvents: 32,
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
    if (!navigator.onLine) {
      this.setState({
        offlineText:
          'Your are currently offline. The displayed events might not be up to date.'
      });
    } else {
      this.setState({
        offlineText: ''
      });
    }
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
      this.updateEvents(this.state.locations, numberOfEvents)
    );
  };

  render() {
    const { events, locations, numberOfEvents, offlineText } = this.state;
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

        <OfflineAlert text={offlineText} />

      </div>
    )
  }
}

export default App;
