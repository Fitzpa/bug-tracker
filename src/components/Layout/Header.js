import React from 'react';

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <i className="fas fa-bug"></i>
          <span>Bug Tracker</span>
          <i className="fas fa-search"></i>
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add" data-testid="add-task-action">
              <i className="fas fa-plus"></i>
            </li>
            <li className="settings__lightmode" data-testid="lightmode-action">
              <i className="fas fa-sun"></i>
            </li>
            <li className="settings__darkmode" data-testid="darkmode-action">
              <i className="fas fa-moon"></i>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
