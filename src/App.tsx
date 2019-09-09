import React from 'react';
// routing
import {BrowserRouter as Router} from 'react-router-dom';
import router from './router';
// styles
import "./App.scss"
// containers
import NotificationAlert from './containers/NotificationAlert';

const App: React.FC = () => {
  return (
    <Router>
      <NotificationAlert/>
      {router}
    </Router>
  );
}

export default App;
