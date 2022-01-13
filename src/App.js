import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Teams from './views/Teams';
import Players from './views/Players';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          KICKBALL LEAGUE
          <NavLink to="/">Home Page</NavLink>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/players">Players</NavLink>
        </header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/players" component={Players} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
