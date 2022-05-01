import React from 'react';

export default function SeeMoreButton() {
  return (
    <div className="button-container">
      <button className="btn flex" onClick={() => console.log('clicked!')}>
        <span className="btn-text">See more</span>
      </button>
    </div>
  );
}
