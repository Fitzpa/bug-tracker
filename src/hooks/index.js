import { useState, useEffect } from 'react';
import moment from 'moment';
import { firebase } from '../firebase';
import { collatedTasksExist } from '../helpers';

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('Tasks')
      .where('userId', '==', 'asldkjh2938407oasdf');

    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment().format('DD/MM/YYYY')
          ))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));

      if (selectedProject === 'NEXT_7') {
        newTasks.filter(
          (task) =>
            moment(task.date, 'MM-DD-YYYY').diff(moment(), 'days') <= 7 &&
            task.archived !== true
        );
      } else if ('TOMORROW') {
        newTasks.filter(
          (task) =>
            moment(task.date, 'MM-DD-YYYY').diff(moment(), 'days') === 1 &&
            task.archived !== true
        );
      } else if ('TODAY') {
        newTasks.filter(
          (task) =>
            moment(task.date, 'MM-DD-YYYY').diff(moment(), 'days') === 0 &&
            task.archived !== true
        );
      } else {
        newTasks.filter((task) => task.archived !== true);
      }

      setTasks(newTasks);
      setArchivedTasks(newTasks.filter((task) => task.archived !== false));
    });

    return () => unsubscribe();
  }, [selectedProject]);

  return { tasks, archivedTasks };
};
// TODO Clean up these ternarys to be more readable

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('Projects')
      .where('userId', '==', 'asldkjh2938407oasdf')
      .orderBy('projectId')
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((project) => ({
          ...project.data(),
          docId: project.id,
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects, setProjects };
};
