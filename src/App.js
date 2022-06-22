import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home';
import EmployeeManagerScreen from './Screens/EmployeeManager';
import { EmpoyeeManager } from './Context/EmployeeManager';


function App() {   

  return (
      <div className="container">
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="EmployeeManager" element={<EmpoyeeManager><EmployeeManagerScreen /></EmpoyeeManager>} />
      </Routes>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
