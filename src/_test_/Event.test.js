import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";


describe('<EventList /> component', () => {
    let EventWrapper;

    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData} />);
    });

    test('show event', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });

    test("render the location", () => {
        expect(EventWrapper.find(".location")).toHaveLength(1);
    });


})

export default Event;