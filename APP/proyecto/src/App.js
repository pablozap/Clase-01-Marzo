import {logo} from './logo.svg';
import {Footer} from './componentes/footer';
import {Contador}  from "./componentes/Contador";
import './App.css';
import { NavBar } from "./componentes/NavBar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Empresa } from './pages/Empresa';
import { Contacto } from './pages/Contacto';
import { Conocenos } from './pages/Conocenos';

function App() {
  return (  
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/Empresa' element={<Empresa/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
          <Route path='/Conocenos' element={<Conocenos/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}
export default App;
{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}