import './assets/styles/css/style.css';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact';

import store from './redux/store';

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history} basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
