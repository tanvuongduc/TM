import '../css/App.css';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route to="/" exact component={Login} />
        </Switch>
      </Router>
    </div>
      
  );
}

export default App;
