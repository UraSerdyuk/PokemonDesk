import React from 'react';

import HomePage from './pages/Home';

import s from './App.module.scss';

const App = () => {
  return (
    <div className={s.container}>
      <HomePage />
    </div>
  );
};

export default App;
