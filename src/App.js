import React from 'react';
import { Header } from './components/Layout/Header';
import { Content } from './components/Layout/Content';
import { Footer } from './components/Layout/Footer';
import './styles/reset.scss';
import './styles/styles.scss';

export const App = () => (
  <div className="App">
    <Header />
    <Content />
    <Footer />
  </div>
);
