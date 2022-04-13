import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";


describe('<EventList /> component', () => {
    let EventWrapper;

    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[0]} />);
    });

    test('show event', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });

    test("show the location of event", () => {
        expect(EventWrapper.find(".location")).toHaveLength(1);
    });

    // test("Render date and timezone", () => {
    //     expect(EventWrapper.find(".start-date")).toHaveLength(1);
    // });

})

export default Event;