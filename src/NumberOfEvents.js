import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        infoText: "",
    };

    handleInputChanged = (event) => {
        const number = event.target.value;
        if (number <= 0 || number > 32) {
            this.setState({

                infoText: "Enter number between 1 and 32",
            });
        } else {
            this.setState({
                numberOfEvents: number,
                infoText: "",
            });
        }
        this.props.updateNumberOfEvents(number);
    };

    render() {
        return (
            <div className="numberOfEvents">
                <ErrorAlert text={this.state.infoText} />
                <label>Number of Events: </label>
                <input
                    type="number"
                    className="numberOfEvents"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;