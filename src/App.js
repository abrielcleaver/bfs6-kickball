import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Players from './views/Players';
import Teams from './views/Teams';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">KICKBALL LEAGUE</header>

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/teams" component={Teams} />
          <Route path="/players" component={Players} />
        </Switch>

        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/players">Players</NavLink>
      </BrowserRouter>
    </div>
  );
}

export default App;
