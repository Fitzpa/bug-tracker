import React from 'react';

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <i className="fal fa-bug"></i>
          <i className="fal fa-search"></i>
          <span>Bug Tracker</span>
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add" data-testid="add-task-action">
              <i className="fal fa-plus"></i>
            </li>
            <li className="settings__lightmode" data-testid="lightmode-action">
              <i className="fal fa-sun"></i>
            </li>
            <li className="settings__darkmode" data-testid="darkmode-action">
              <i className="fal fa-moon"></i>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
