import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the user has searched for events by city', () => {

        });

        when('user has list of suggested events', () => {

        });

        then('event elements should be displayed collapsed', () => {

        });
    });
    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the user had list of suggested events', () => {

        });

        when('user clicks Show Details button for a given event element', () => {

        });

        then('the user should see more information for an event', () => {

        });
    });
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('the user has an expanded event details', () => {

        });

        when('user clicks Hide Details button for a given event element', () => {

        });

        then('the user should see a collapsed event element hiding its details', () => {

        });
    });
})