import React from 'react';
import { useState } from 'react';

export default function StandupTicket() {
  const [isEditing, setIsEditing] = useState(true);
  const [content, setContent] = useState('');
  const [animationClass, setAnimationClass] = useState('ticket-wrapper');

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
      console.log('clicked enter!');
      setAnimationClass('ticket-wrapper border-animation');
    }
  };

  if (isEditing) {
    return (
      <div className={animationClass}>
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
    <div className={animationClass}>
      <div className="standup-text">
        <p className="zero-margin">{content}</p>
      </div>
      <div className="standup-color"></div>
    </div>
  );
}
