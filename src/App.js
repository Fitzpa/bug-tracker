import React, { useState } from 'react';
import { Header } from './components/Layout/Header';
import { Content } from './components/Layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';
import './styles/styles.scss';

export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main className={darkMode ? 'darkmode' : undefined}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};
