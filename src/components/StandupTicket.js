import React from 'react';
import { useState } from 'react';

export default function StandupTicket({ canEdit }) {
  const [isEditing, setIsEditing] = useState(canEdit);
  const [content, setContent] = useState('');
  const [animationClass, setAnimationClass] =
    useState('ticket-wrapper'); /* s.t. can add border-animation class */

  const sendDataToBackEnd = () => {
    fetch('/tickets/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Don',
        content: content
      })
    })
      .then((res) => res.json())
      .then((data) => console.log(data))

      .catch((error) => {
        console.log('Error: ', error);
      });
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      console.log('e.target.value: ', e.target.value);
      setContent(e.target.value);
      e.preventDefault();
      setAnimationClass('ticket-wrapper border-animation');
      // TODO: move focus from this item s.t. we don't get blinking thing inside

      setTimeout(() => console.log('content: ', content), 1000);

      // sendDataToBackEnd();
    } else {
      /* we clicked on another key, thus modifying the content. Thus on next enter,
      we'll want to show the animation */
      setAnimationClass('ticket-wrapper');
    }
  };

  return (
    <div className={animationClass}>
      <div className="standup-text">
        {isEditing ? (
          <form onSubmit={(e) => e.preventDefault()}>
            <textarea
              className="textarea"
              maxLength={80}
              required="required"
              placeholder="Write your standup for Apr 11 here!"
              onKeyDown={onEnterPress}
              defaultValue={content}
            ></textarea>
          </form>
        ) : (
          <div className="standup-text">
            <p className="zero-margin">{content}</p>
          </div>
        )}
      </div>
      <div className="standup-color"></div>
    </div>
  );
}
