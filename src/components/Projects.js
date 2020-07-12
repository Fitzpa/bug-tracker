import React, { useState } from 'react';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { SingleProject } from './SingleProject';

export const Projects = ({ activeValue = null }) => {
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const [active, setActive] = useState(activeValue);
  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid="project-action"
        className={
          active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
      >
        <SingleProject project={project} />
      </li>
    ))
  );
};
