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
    </div>
  );
};
