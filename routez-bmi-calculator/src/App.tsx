import React from 'react';
import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';

import './App.css';
import routes from './routes';

function App() {
  return (
    <div className="container">
      <div className='inner-container'>
        <RouterProvider router={routes} />
      </div>
    </div>
  );
}

export default App;
