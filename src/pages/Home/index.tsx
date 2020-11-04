import React from 'react';
import cn from 'classnames';

import Header from '../../components/header';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={cn(s.root)}>
      <Header />
    </div>
  );
};

export default HomePage;
