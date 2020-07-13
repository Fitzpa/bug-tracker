import React from 'react';
import moment from 'moment';

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) =>
  showTaskDate && (
    <div className="task-date" data-testid="task-date-overlay">
      <ul className="task-date__list">
        <li
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment().format('MM/DD/YYYY'));
          }}
          data-testid="task-date-today"
        >
          <span>
            <i className="fas fa-space-shuttle"></i>
          </span>
          <span>Today</span>
        </li>
        <li
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment().add(1, 'day').format('MM/DD/YYYY'));
          }}
          data-testid="task-date-tomorrow"
        >
          <span>
            <i className="fas fa-plane"></i>
          </span>
          <span>Tomorrow</span>
        </li>
        <li
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment().add(7, 'days').format('MM/DD/YYYY'));
          }}
          data-testid="task-date-next-week"
        >
          <span>
            <i className="fas fa-paper-plane"></i>
          </span>
          <span>Next Week</span>
        </li>
      </ul>
    </div>
  );
