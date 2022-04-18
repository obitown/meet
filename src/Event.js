import React, { Component } from "react";

class Event extends Component {
    state = {
        collapsed: true,
    };

    handleClick = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { event } = this.props;
        const { collapsed } = this.state;
        return (
            <div className="event">
                <h2 className="summary">{event.summary}</h2>
                <h4>Date/Time:</h4>
                <p className="start-date">
                    {event.start.dateTime}
                </p>
                <h4>Location:</h4>
                <p className="location">
                    {event.location}
                </p>

                <button
                    variant="outline-info"
                    className={`details-button ${collapsed ? "show" : "hide"}-details`}
                    onClick={this.handleClick}
                >
                    {collapsed ? "Show Details" : "Hide Details"}
                </button>

                {!collapsed && (
                    <div className={`extra-details ${this.state.collapsed ? "hide" : "show"}`}>
                        <h4>Description:</h4>
                        <p className="event-description">{event.description}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default Event;