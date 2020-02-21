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
    <Router>
    <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/search/:name" component={ InputPractice } />
          <Route path="/home">
          
            <Home />
          </Route>
        </Switch>
      <header className="App-header">
       <SearchBarComponent /> 
      {/* <InputPractice /> */}
      </header>
    </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
