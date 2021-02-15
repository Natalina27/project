//Core
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

//Components
import {Routes} from './navigation';

//Styles
import styles from './App.module.css';

export const  App = () => {
  return (
    <div className={styles.App}>
        <Router>
            <Routes />
        </Router>
    </div>
  );
}
