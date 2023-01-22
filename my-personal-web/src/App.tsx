import React from 'react';
import './App.scss';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Section } from 'react-bulma-components';

function App() {
  return (
    <div className="App">
      <Header />
      <Section>
        <Outlet />
      </Section>
    </div>
  );
}

export default App;
