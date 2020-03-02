import React  from 'react';
import './App.css';
import SummonerSearchResultPage from '../../pages/SummonerSearchResultPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchHomePage from '../../pages/SearchHomePage';
 
const App = () => {
  return (
    <div>
    <Router>
        <Link to="/">Home</Link>
        <Switch>
          <Route path="/search/:name" component={ SummonerSearchResultPage } />
          <Route path="/" component={ SearchHomePage } />
        </Switch>
    </Router>

    </div>
  );
}


export default App;