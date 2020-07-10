import React from 'React';

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li>
          <span>
            <i className="fal fa-inbox"></i>
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <i className="fal fa-calendar-plus"></i>
          </span>
          <span>Today</span>
        </li>
        <li>
          <span>
            <i className="fal fa-calendar-alt"></i>
          </span>
          <span>Next 7 Days</span>
        </li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <i className="fal fa-chevron-down"></i>
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">Projects go here.</ul>
      Add Project component here
    </div>
  );
};
