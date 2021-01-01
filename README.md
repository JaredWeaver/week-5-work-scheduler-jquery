# 05 Third-Party APIs: Work Day Scheduler

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use a library like [Moment.js](https://momentjs.com/) to work with dates and times. `Moment.js` has historically been the most popular date/time library but is no longer supported by its developers. However, you can still use it for this project, or you can look into one of the following alternatives:

  * [Luxon](https://moment.github.io/luxon/)

  * [Day.js](https://day.js.org/)

  * [date-fns](https://date-fns.org/)

  * [js-Joda](https://js-joda.github.io/js-joda/)

Whichever library you choose, be sure to read the documentation carefully!


## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```


## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```


## Mock-Up

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)
