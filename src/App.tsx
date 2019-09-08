import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import router from './router';

const App: React.FC = () => {
  return (
    <Router>
      {router}
    </Router>
  );
}

export default App;
