import React, { Component } from "react";

class Event extends Component {
    state = {
        event: {},
    }

    render() {
        const { event } = this.props;


        return (
            <div className="event">
                <h2 className="summary">{event.summary}</h2>
                <p className="location">{event.location}</p>
                <p className="start-date">
                    {event.dateTime} {event.timeZone}
                </p>


            </div>
        );
    }
}

export default Event;