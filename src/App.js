import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import DashBoard from './components/auth/DashBoard';
import Login from './components/auth/Login';

function App() {
  return (
    <Login />
  );
}

<div className="container mt-3">
  <Router>
    <Switch>
      <Route exact path={["/", "/login"]} component={Login} />
      <Route exact path="/dashboard" component={DashBoard} />
    </Switch>
  </Router>
</div>

export default App;
