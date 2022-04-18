import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 15,
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
            <div className="NumberOfEvents">
                <h4>Number of Events: </h4>
                <input
                    type="number"
                    className="numberOfEvents"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                />
                <div>
                    <ErrorAlert text={this.state.infoText} />
                </div>
            </div>
        );
    }
}

export default NumberOfEvents;