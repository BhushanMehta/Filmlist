import React,{useState} from 'react';
import './App.css';

import FilmsComponent from './components/FilmsComponent';

const App = () => {

  return (
    <div className="main-container">
      <FilmsComponent />
    </div>
  );
}

export default App;
