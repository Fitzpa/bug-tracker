import React from 'react';
import { useProjectsValue } from '../context';

export const ProjectOverlay = ({
  setProject,
  showProjectOverlay,
  setShowProjectOverlay,
}) => {
  const { projects } = useProjectsValue();
  return (
    projects &&
    showProjectOverlay && (
      <div className="prject-overlay" data-testid="project-overlay">
        <ul className="project-overlay__list">
          {projects.map((project) => {
            <li
              key={project.projectId}
              data-testId="project-overlay-action"
              onClick={() => {
                setProject(project.projectId);
                setShowProjectOverlay(false);
              }}
            >
              {project.name}
            </li>;
          })}
        </ul>
      </div>
    )
  );
};
