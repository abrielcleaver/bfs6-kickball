import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">KICKBALL LEAGUE</header>

        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/players">Players</NavLink>

        <Switch>
          <Route path="/teams" />
          <Route path="/players" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
