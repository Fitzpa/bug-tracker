import React from 'react';
import { Header } from './components/Layout/Header';
import { Content } from './components/Layout/Content';
import { Footer } from './components/Layout/Footer';
import { ProjectsProvider, SelectedProjectProvider } from './context';
import './styles/reset.scss';
import './styles/styles.scss';

export const App = () => {
  return (
    <div className="App">
      <SelectedProjectProvider>
        <ProjectsProvider>
          <Header />
          <Content />
          <Footer />
        </ProjectsProvider>
      </SelectedProjectProvider>
    </div>
  );
};
