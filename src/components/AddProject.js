import React, { useState } from 'react';
import { firebase } from '../firebase';
import { generatePushId } from '../helpers';
import { useProjectsValue } from '../context';

export const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState('');

  const projectId = generatePushId();
  const { setProjects } = useProjectsValue();

  const addProject = () => {
    projectName &&
      firebase
        .firestore()
        .collection('Projects')
        .add({
          projectId,
          name: projectName,
          userId: 'asldkjh2938407oasdf',
        })
        .then(() => {
          setProjects([]); // this is a little trick to call firebase and refresh the resources
          setProjectName('');
          setShow(false);
        });
  };

  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input">
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="add-project__name"
            data-testid="project-name"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => addProject()}
            data-testid="add-project-submit"
          >
            Add Project
          </button>
          <span
            className="add-project__cancel"
            onClick={() => setShow(false)}
            data-testid="add-project-cancel"
          >
            Cancel
          </span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span
        className="add-project__text"
        data-testid="add-project-action"
        onClick={() => setShow(!show)}
      >
        Add Project
      </span>
    </div>
  );
};
