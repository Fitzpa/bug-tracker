import React, { useState } from 'react';
import { Projects } from '../Projects';
import { AddProject } from '../AddProject';
import { useSelectedProjectValue } from '../../context';

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          className={active === 'inbox' ? 'active' : undefined}
          data-testid="inbox"
          onClick={() => {
            setActive('inbox');
            setSelectedProject('INBOX');
          }}
        >
          <span>
            <i className="fas fa-inbox"></i>
          </span>
          <span>Inbox</span>
        </li>
        <li
          className={active === 'today' ? 'active' : undefined}
          data-testid="today"
          onClick={() => {
            setActive('today');
            setSelectedProject('TODAY');
          }}
        >
          <span>
            <i className="fas fa-calendar-plus"></i>
          </span>
          <span>Today</span>
        </li>
        <li
          className={active === 'next_7' ? 'active' : undefined}
          data-testid="next_7"
          onClick={() => {
            setActive('next_7');
            setSelectedProject('NEXT_7');
          }}
        >
          <span>
            <i className="fas fa-calendar-alt"></i>
          </span>
          <span>Next 7 Days</span>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        onClick={() => setShowProjects(!showProjects)}
      >
        <span>
          <i
            className={
              !showProjects ? 'hidden-projects' : 'fas fa-chevron-down'
            }
          ></i>
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

      {showProjects && <AddProject />}
    </div>
  );
};
