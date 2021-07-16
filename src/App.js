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
      
      <body>
        <ProgramSlctr/>
      </body>
    </div>
  );
}

export default App;