import '../css/App.css';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Signup" component={Signup} />
        </Switch>
      </Router>
    </div>
      
  );
}

export default App;
