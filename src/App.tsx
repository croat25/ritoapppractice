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
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/search/:name" component={ InputPractice } />
          <Route path="/">
           <Home />
          </Route>
        </Switch>
      <header className="App-header">
      {/* <InputPractice /> */}
      </header>
    </div>
    </Router>
  );
}

function Home() {
  return <SearchBarComponent /> ;
}

export default App;
