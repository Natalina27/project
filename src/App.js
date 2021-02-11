//Core
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//Styles
import Styles from './App.module.css';
import {Routes} from "./navigation";

function App() {
  return (
    <div className={Styles.App}>
        <Router>
            <Routes />
        </Router>
    </div>
  );
}

export default App;
