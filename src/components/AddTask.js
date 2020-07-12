import React, { useState } from 'react';
import moment from 'moment';
import { firebase } from '../firebase';
import { useSelectedProjectValue } from '../context';

export const AddTask = ({
  showAddTaskMain = true,
  shouldShowMain = false,
  showQuickAddTask,
  setShowQuickAddTask,
}) => {
  const [task, setTask] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [project, setProject] = useState('');
  const [showMain, setShowMain] = useState(shouldShowMain);
  const [showProjectOverlay, setShowProjectOverlay] = useState(false);
  const [showTaskDate, setShowTaskDate] = useState(false);

  const { selectedProject } = useSelectedProjectValue();

  const addTask = () => {
    const projectId = project || selectedProject;
    let collatedDate = '';

    if (projectId === 'TODAY') {
      collatedDate = moment().format('MM/DD/YYYY');
    } else if (projectId === 'NEXT_7') {
      collatedDate = moment().add(7, 'days').format('MM/DD/YYYY');
    }

    return (
      task &&
      projectId &&
      firebase
        .firestore()
        .collection('Tasks')
        .add({
          archived: false,
          data: collatedDate || taskDate,
          projectId,
          task,
          userId: 'asldkjh2938407oasdf',
        })
        .then(() => {
          setTask('');
          setProject('');
          setShowMain(false);
          setShowProjectOverlay(false);
        })
    );
  };
  return (
    <div
      className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
      data-testid="add-task-comp"
    >
      {showAddTaskMain && (
        <div
          className="add-task__shallow"
          data-testid="show-main-action"
          onClick={() => setShowMain(!showMain)}
        >
          <span className="add-task__plus">+</span>
          <span className="add-task__text">Add Task</span>
        </div>
      )}

      {(showMain || showQuickAddTask) && (
        <div className="add-task__main" data-testid="add-task-main">
          {showQuickAddTask && (
            <>
              <div data-testid="quick-add-task">
                <h2 className="header">Quick Add Task</h2>
                <span
                  className="add-task__cancel-x"
                  data-testid="add-task-quick-cancel"
                  onClick={() => {
                    setShowMain(false);
                    setShowProjectOverlay(false);
                    setShowQuickAddTask(false);
                  }}
                >
                  X
                </span>
              </div>
            </>
          )}
          <p>project overlay</p>
          <p>taskdate here</p>
          <input
            type="text"
            className="add-task__content"
            data-testid="add-task-content"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="add-task__submit"
            data-testid="add-task"
            onClick={() => addTask()}
          >
            Submit
          </button>
          {!showQuickAddTask && (
            <span
              className="add-task__cancel"
              data-testid="add-task-main-cancel"
              onClick={() => {
                setShowMain(false);
                setShowProjectOverlay(false);
              }}
            >
              Cancel
            </span>
          )}
          <span
            className="add-task__project"
            data-testid="add-project-overlay"
            onClick={() => setShowProjectOverlay(!showProjectOverlay)}
          >
            <i className="fas fa-list-alt"></i>
          </span>
          <span
            className="add-task__date"
            data-testid="add-task-date-overlay"
            onClick={() => setShowTaskDate(!showTaskDate)}
          >
            <i className="fas fa-calendar-alt"></i>
          </span>
        </div>
      )}
    </div>
  );
};
