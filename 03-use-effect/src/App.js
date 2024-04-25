import logo from "./logo.svg";
import "./App.css";
import PruebasComponent from "./components/PruebasComponent";
import AjaxComponente from "./components/AjaxComponente";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PruebasComponent></PruebasComponent>

        <AjaxComponente></AjaxComponente>
      </header>
    </div>
  );
}

export default App;
