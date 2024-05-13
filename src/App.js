import "./App.css";
import Formulario1 from "./components/Formulario1";
import FormularioBootstrap from "./components/FormularioBootstrap";
import NavbarBootstrap from "./components/NavbarBootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarBootstrap/>
      </header>
      <main>
       <br/>
       <Formulario1 />
        <br/>
        <FormularioBootstrap />
      </main>
    </div>
  );
}

export default App;
