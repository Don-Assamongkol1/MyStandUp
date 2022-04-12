import React from 'react';
import SeeMoreButton from './SeeMoreButton';
import StandupTicket from './StandupTicket';
import { useEffect } from 'react';

export default function Column() {
  useEffect(() => {
    fetch('/subscribers/', {})
      .then((res) => res.json())
      .then((data) => console.log(data))

      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);

  return (
    <div className="column">
      <h3>Don</h3>
      <div className="ticket-container">
        <StandupTicket canEdit={true} />
        <StandupTicket />
        <StandupTicket />
        <StandupTicket />
        <StandupTicket />
        <StandupTicket />
      </div>
      <SeeMoreButton />
    </div>
  );
}

// Look into auth first to see how I can deal with permissions

// Backend routes to set up
// get initial info: for a given user, gets the previous 5 stand ups
// seed DB first so is easier

/* 
standup model: 
  - content
  - user who wrote it
  - date (this will tell you the status of whether you can edit)
*/

/* 
set up cron tab node js
https://javascript.plainenglish.io/schedule-repetitive-tasks-in-node-js-3bef27515ce5
*/
