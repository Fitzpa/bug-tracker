import React from 'react';
import { Header } from './components/Layout/Header';
import { Content } from './components/Layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';
import './styles/styles.scss';

export const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main>
          <Header />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};
