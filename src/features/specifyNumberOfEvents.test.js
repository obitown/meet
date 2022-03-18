import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasnt specified a number, 16 is the default number', ({ given, when, then }) => {
        given('the user is on the main page', () => {

        });

        when('the user does not specify number of events', () => {

        });

        then("the user should see 16 events by default", (arg0) => {

        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('the user has searched for events', () => {

        });

        when('the user specifies the number of events to see', () => {

        });

        then('the user should see the specified number of events', () => {

        });
    });
})