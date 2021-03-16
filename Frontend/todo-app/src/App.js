import logo from './logo.svg';
import './App.css';
import TaskManagerPage from './pages/TaskManagerPage'
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
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
