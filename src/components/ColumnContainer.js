import React from 'react';
import Column from './Column';
import Timeline from './Timeline';

export default function ColumnContainer() {
  return (
    <div className="column-container">
      {/* <Timeline /> */}
      <Column />
      <Column />
      <Column />
    </div>
  );
}
