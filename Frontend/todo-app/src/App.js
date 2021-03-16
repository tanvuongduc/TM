import logo from './logo.svg';
import './App.css';
import TaskManagerPage from './pages/TaskManagerPage';
import LoginPage from './pages/Login';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/task-manager">
            <TaskManagerPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
