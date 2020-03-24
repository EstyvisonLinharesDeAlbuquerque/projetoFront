import React from 'react';
import './App.css';
import {HomePage} from './Home/HomePage.js';
import {Login} from './Home/Login.js';
import {Register} from './Home/Register.js'

function App()  {
  return (
    <div className="app d-flex align-items-center justify-content-center h-100">
     <HomePage/>
    </div>
  );
}

export default App;
