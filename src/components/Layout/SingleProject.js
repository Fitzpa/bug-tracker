import React, { useState } from 'react';
import { useProjectsValue, useSelectedProjectValue } from '../../context';
import { firebase } from '../../firebase';

export const SingleProject = ({ project }) => {
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useProjectsValue();
  const [showConfirm, setShowConfirm] = useState(false);

  const deleteProject = (docId) => {
    firebase
      .firestore()
      .collection('Projects')
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject('INBOX');
      });
  };
  return (
    <>
      <span className="sidebar__dot">
        <i className="fas fa-circle"></i>
      </span>
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={() => setShowConfirm(!showConfirm)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShowConfirm(!showConfirm);
        }}
        tabIndex={0}
        role="button"
        aria-label="Cancel adding project, do not delete"
      >
        <i className="fas fa-trash"></i>
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Confirm Deletion of Project</p>
              <button
                type="button"
                onClick={() => deleteProject(project.docId)}
              >
                Confirm
              </button>
              <span
                className="project-delete-modal__inner__span"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                Cancel
              </span>
            </div>
          </div>
        )}
      </span>
    </>
  );
};
