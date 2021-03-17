import '../css/App.css';
import Login from './Login';
import Task from './Task';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Task/:username" component={Task} />
        </Switch>
      </Router>
    </div>
      
  );
}

export default App;
