import React  from 'react';
import './App.css';
import InputPractice from './InputPractice';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchBarComponent from './SearchBarComponent';
 
const App = () => {
  return (
    <div>
    <Router>
        <Link to="/">Home</Link>
        <Switch>
          <Route path="/search/:name" component={ InputPractice } />
          <Route path="/" component={ SearchBarComponent } />
        </Switch>
    </Router>

    </div>
  );
}


export default App;