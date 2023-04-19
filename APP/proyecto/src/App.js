import logo from './logo.svg';
import {Footer} from './componentes/footer';
import './App.css';
import Contador  from "./componentes/Contador";
function App() {
  return (
    <div className="App">
      
      <h1>Hello</h1>
      
      <Contador nombre = "Juan" edad = "30" activo = "true"/>
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