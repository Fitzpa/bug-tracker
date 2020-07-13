import React from 'react';
import moment from 'moment';

export const TaskDate = ({
  setProject,
  setTaskDate,
  showTaskDate,
  setShowTaskDate,
}) =>
  showTaskDate && (
    <div className="task-date" data-testid="task-date-overlay">
      <ul className="task-date__list">
        <li
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment().format('MM/DD/YYYY'));
            setProject('TODAY');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setShowTaskDate(false);
              setTaskDate(moment().format('DD/MM/YYYY'));
              setProject('TODAY');
            }
          }}
          data-testid="task-date-today"
          aria-label="Select today as the task date"
          role="button"
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
            setProject('TOMORROW');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setShowTaskDate(false);
              setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
              setProject('TOMORROW');
            }
          }}
          data-testid="task-date-tomorrow"
          role="button"
          aria-label="Select tomorrow as the task date"
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
            setProject('NEXT_7');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setShowTaskDate(false);
              setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
              setProject('NEXT_7');
            }
          }}
          data-testid="task-date-next-week"
          aria-label="Select next week as the task date"
          role="button"
        >
          <span>
            <i className="fas fa-paper-plane"></i>
          </span>
          <span>Next Week</span>
        </li>
      </ul>
    </div>
  );
