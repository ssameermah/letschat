import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
      <div className="app__body">
        <Sidebar />

        <Switch>
          <Route path="/room/:roomId">
            <Chat />
          </Route>
          <Route path="/" >
            {/* <Chat /> */}
            <h1>Welcome</h1>
          </Route>

        </Switch>

      </div>

      </Router>
      
    </div>
  );
}

export default App;
