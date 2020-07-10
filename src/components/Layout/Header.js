import React from 'react';

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <i className="fal fa-bug fa-3x"></i>
          <i className="fal fa-search fa-3x"></i>
        </div>
        <div className="settings">
          <ul>
            <li>
              <i className="fal fa-plus fa-3x"></i>
            </li>
            <li>
              <i className="fal fa-sun fa-3x"></i>
              <i className="fal fa-moon fa-3x"></i>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
