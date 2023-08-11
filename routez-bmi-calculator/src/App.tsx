import React from 'react';
import logo from './logo.svg';
<<<<<<< HEAD
import { RouterProvider } from 'react-router-dom';

import './App.css';
import routes from './routes';

function App() {
  return (
    <RouterProvider router={routes}/>
=======
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 98a139e38604d591e07e51d507116868c7d9a0fa
  );
}

export default App;
