import React from 'react';
import SeeMoreButton from './SeeMoreButton';
import StandupTicket from './StandupTicket';
import { useEffect } from 'react';

export default function Column({ name }) {
  useEffect(() => {
    fetch('/tickets/', {})
      .then((res) => res.json())
      .then((data) => console.log(data))

      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);

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
