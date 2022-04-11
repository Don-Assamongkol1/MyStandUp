import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default function SeeMoreButton() {
  return (
    <div className="button-container">
      <IconContext.Provider value={{ color: '#343a40', size: '20px' }}>
        <button onClick={() => console.log('clicked!')}>
          <FaPlusCircle />
        </button>
      </IconContext.Provider>
    </div>
  );
}
