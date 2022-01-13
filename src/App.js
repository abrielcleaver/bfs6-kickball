import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Teams from './views/Teams';
import Players from './views/Players';
import PlayerId from './views/PlayerId';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          KICKBALL LEAGUE
          <NavLink to="/">Home Page</NavLink>
        </header>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/players">Players</NavLink>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/players" component={Players} />
          <Route exact path="/players/:id" component={PlayerId} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
