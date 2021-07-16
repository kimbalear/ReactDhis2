import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import ProgramSlctr from './components/programs/programs_lst';
/*
<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <header className="App-header">
        
      </header>
*/
function App() {
  return (
    <div className="App">
        <ProgramSlctr/>
    </div>
  );
}

export default App;