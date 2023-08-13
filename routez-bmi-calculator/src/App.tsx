import React from 'react';
import { Container } from '@mui/material';
import { RouterProvider } from 'react-router-dom';

import './App.css';
import routes from './routes/routes';

function App() {
  return (
    <main>
      <Container maxWidth="xs" className='container'>
        <RouterProvider router={routes} />
      </Container>
    </main>
  );
}

export default App;
