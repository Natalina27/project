//Core
import React from 'react';
import { Router } from 'react-router-dom';

//Routes
import { Routes } from './navigation';
//Others
import { history } from './navigation/history';

//Styles
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
        <Router history={history}>
            <Routes />
        </Router>
    </div>
  );
}

export default App;
