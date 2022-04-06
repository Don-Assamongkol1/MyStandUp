import React from 'react';
import { useState } from 'react';

export default function StandupTicket() {
  const [content, setContent] = useState('blah');

  function handleSubmit() {
    console.log('submitted!');
  }

  return (
    <div className="ticket-wrapper">
      <div className="standup-text">
        <form action="">
          <input
            type="text"
            className="input-text"
            // onChange={() => setContent({ value: event.target.value })}
          />
          Y: Dev test scenarios from CSV completed. T: Finishing required
          updates & exploring task set-up. B: None.
        </form>
      </div>
      <div className="standup-color"></div>
    </div>
  );
}

// {/* Y: Dev test scenarios from CSV completed. T: Finishing required updates
//       & exploring task set-up. B: None. */}

// want the form to go down if text overflows
// change form font
