import React, { useState } from 'react';

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <i className="fas fa-bug"></i>
          <span>Bug Manager</span>
          <i className="fas fa-tasks"></i>
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add" data-testid="add-task-action">
              <i className="fas fa-plus"></i>
            </li>
            <li
              className="settings__darkmode"
              data-testid="dark-mode-action"
              onClick={() => setDarkMode(!darkMode)}
              role="button"
            >
              {!darkMode ? (
                <i className="fas fa-moon"></i>
              ) : (
                <i className="fas fa-sun"></i>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
