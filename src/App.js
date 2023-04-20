import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import axios from 'axios'; 
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {

  axios.defaults.baseURL='http://localhost:8080';


  return (
    <BrowserRouter>
      <Dashboard/>
    </BrowserRouter>
  );
}

export default App;
