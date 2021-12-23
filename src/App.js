import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/connected-home';
import AddEmployee from './component/add-employee';
import EditEmployee from './component/edit-employee';


function App() {   

  return (
      <div className="container">
          <Router>
              <div className="col-md-12">
                  <h1 className="text-center" style={style}></h1>
                  <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/add" component={AddEmployee} />
                      <Route path="/edit" component={EditEmployee} />
                 
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
