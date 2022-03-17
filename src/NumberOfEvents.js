import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        message: "",
    };

    handleInputChanged = (event) => {
        const number = event.target.value;
        if (number <= 0 || number > 32) {
            this.setState({
                message: "Enter number between 1 and 32",
            });
        } else {
            this.setState({
                numberOfEvents: number,
                message: "",
            });
        }
    };

    render() {
        return (
            <div className="NumberOfEvents">
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