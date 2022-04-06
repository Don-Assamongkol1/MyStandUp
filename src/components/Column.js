import React from 'react';
import StandupTicket from './StandupTicket';

export default function Column() {
  return (
    <div className="column">
      <h3>Don</h3>
      <div className="ticket-container">
        <StandupTicket />
        <StandupTicket />
        <StandupTicket />
        <StandupTicket />
        <StandupTicket />
        <StandupTicket />
      </div>
    </div>
  );
}
