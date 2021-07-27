//import './assets/css/App.css';
import Programs from './assets/pages/Programs'
import ProgramStages from './assets/pages/ProgramStages'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavLink to="/programs" className="btn-dark" activeClassName="active">
        Programs
      </NavLink>
      <NavLink to="/program_stages" className="btn-dark" activeClassName="active">
        Program Stages
      </NavLink>
      <NavLink to="/program_stage" className="btn-dark" activeClassName="active">
        Program Stage
      </NavLink>
      <Switch>
        <Route path="/" exact>
          ...
        </Route>
        <Route path="/programs">
          <Programs />
        </Route>
        <Route path="/program_stages">
          <ProgramStages/>
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