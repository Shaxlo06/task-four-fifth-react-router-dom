import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header'
import Users from './routes/Users';
import Admin from './routes/Admin';

function App() {
  return (
    <div className="App">
     <Header/>
     <Switch>
      <Route exact path="/">
        <Users/>
      </Route>
      <Route path="/admin">
        <Admin/>
      </Route>
     </Switch>
    </div>
  );
}

export default App;
