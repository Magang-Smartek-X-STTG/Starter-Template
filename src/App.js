import './assets/styles/css/style.css';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from './pages/Home';
import Abouth from './pages/Abouth';
import Contact from './pages/Contact';

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className="App">
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Abouth" component={Abouth}/>
          <Route exact path="/Contact" component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
