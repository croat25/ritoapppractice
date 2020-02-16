import React, {useState, useEffect} from 'react';
import './App.css';
import TodoItem from './TodoItem';
import ContactCard from './ContactCard';
import SearchBarComponent from './SearchBarComponent';
import InputPractice from './InputPractice';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link
} from "react-router-dom";
 
const App = () => {
  const[count, setCount] = useState(0);
  const handleIncremet = () => setCount(currentCount => currentCount + 1);
  const handDecrement = () => setCount(currentCount => currentCount - 1);
  useEffect(() => setCount(currentCount => currentCount + 1), []);

  return (
    <Router>
    <div className="App">
        {/* <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
            <Link to="/topics">Topics</Link>
          </li>
          </ul>
        </nav> */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <SearchBarComponent />
        <TodoItem />
        <h1>{count}</h1>
        <button type="button" onClick={handleIncremet}>
        Increment
      </button>
      <button type="button" onClick={handDecrement}>
        Decrement
      </button>
        <ContactCard name="Mr.Wnsterston"
                    imgUrl="http://placekitten.com/300/200"
                    phone="123123123"
                    email="yoloswag@123.com"/>


        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      </header>
      <InputPractice />
    </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default App;
