import React from 'react';
import { BiRun } from 'react-icons/bi';

export default function Header() {
  return (
    <div className="header-box">
      <div>
        <a href="./">
          <h1 className="header-title">
            <BiRun size={30} />
            MyStandUp
          </h1>
        </a>
      </div>
    </div>
  );
}
