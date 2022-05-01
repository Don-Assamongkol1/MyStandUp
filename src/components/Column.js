import React from 'react';
import SeeMoreButton from './SeeMoreButton';
import StandupTicket from './StandupTicket';
import { useEffect } from 'react';

export default function Column({ name }) {
  useEffect(() => {
    fetch('/tickets/', {})
      .then((res) => res.json())
      .then((data) => console.log('front end is connected to backend'))

      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);
  // Query the backend from here, grab all the most recent tickets, and
  // pass it down to the standup tickets

  return (
    <div className="column">
      <h3>{name}</h3>
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
