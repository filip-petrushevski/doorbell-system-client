import React from 'react';
import './App.css';
import FlagsControl from './components/flags-control/flags-control';
import OneTimeEvent from './components/one-time-event/one-time-event';
import WeeklyEvent from './components/weekly-event/weekly-event';
// @ts-ignore
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function App() {
  return (
      <div className="App">
        <h1>Doorbell system control</h1>
        <FlagsControl></FlagsControl>
        <hr />
        <OneTimeEvent></OneTimeEvent>
        <hr />
        <h2>Weekly event</h2>
        <WeeklyEvent></WeeklyEvent>
        <NotificationContainer />
      </div>
  );
}
export default App;
