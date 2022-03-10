import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: '15',
    }

    handleInputChange = (event) => {

        this.setState({
            numberOfEvents: event.target.value,
        });

    }

    render() {
        return (
            <div className="NumberOfEvents">
                <label>Number of Events:
                    <input
                        type="number"
                        className="numberOfEvents"
                        value={this.state.numberOfEvents}
                        onChange={this.handleInputChange}
                    />
                </label>
            </div>

        )
    }
};
export default NumberOfEvents;