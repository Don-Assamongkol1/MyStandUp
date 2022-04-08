import React from 'react';
import { useState } from 'react';

export default function StandupTicket() {
  const [isEditing, setIsEditing] = useState(true);
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('current content: ', content);
    setIsEditing(false);
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      setContent(e.target.value);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <div className="ticket-wrapper">
        <div className="standup-text">
          <form onSubmit={handleSubmit}>
            <textarea
              className="textarea"
              maxLength={80}
              required="required"
              placeholder="Write your standup here!"
              onKeyDown={onEnterPress}
            ></textarea>
          </form>
        </div>
        <div className="standup-color"></div>
      </div>
    );
  }

  return (
    <div className="ticket-wrapper">
      <div className="standup-text">
        <p className="zero-margin">{content}</p>
      </div>
      <div className="standup-color"></div>
    </div>
  );
}

// {/* Y: Dev test scenarios from CSV completed. T: Finishing required updates
//       & exploring task set-up. B: None. */}

// want the form to go down if text overflows
// change form font

/* <input
  type="text"
  placeholder="Write your standup for today here!"
  className="input-text"
  required
  onChange={(e) => setContent(e.target.value)}
  value={content}
/> */
