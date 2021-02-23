import './App.css';
import {
  HashRouter as Router ,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from "./rutas/About"
import Appp from "./rutas/appp"
import Faq from "./rutas/Faq"
import Home from "./rutas/Home"
import Store from "./rutas/Store"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Store">Store</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Appp">App</Link>
            </li>
            <li>
              <Link to="/Fap">FAQ</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Appp">
              <Appp />
            </Route>
            <Route path="/Fap">
              <Faq />
            </Route>
            <Route path="/Store">
              <Store />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
