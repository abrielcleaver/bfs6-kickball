import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">Kickball</header>

      <BrowserRouter>
        <Switch>
          <Route path="/teams" />
          <Route path="/players" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
