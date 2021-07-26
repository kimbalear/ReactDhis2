//import './assets/css/App.css';
import ProgramList from './assets/pages/ProgramList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact>
          Start
        </Route>
        <Route path="/programs">
          <ProgramList />
        </Route>
        <Route path="/program_stages">
          Program Stages
        </Route>
        <Route path="/program_stage">
          Program Stage
        </Route>
        <Route path="/components">
          Components
        </Route>
      </Switch>
    </Router>

  );
}
export default App;