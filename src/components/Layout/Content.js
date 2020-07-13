import React from 'react';
import { Sidebar } from './Sidebar';
import { Tasks } from '../Tasks';

export const Content = ({ darkMode }) => {
  return (
    <section className="content">
      <Sidebar />
      <Tasks />
    </section>
  );
};
