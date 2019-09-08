import React from 'react';
// routing
import {BrowserRouter as Router} from 'react-router-dom';
import router from './router';
// styles
import "./App.scss"

const App: React.FC = () => {
  return (
    <Router>
      {router}
    </Router>
  );
}

export default App;
