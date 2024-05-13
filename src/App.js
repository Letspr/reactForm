import { Provider } from "react-redux";
import "./App.css";
import FormularioBootstrap from "./components/FormularioBootstrap";
import NavbarBootstrap from "./components/NavbarBootstrap";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <NavbarBootstrap/>
      </header>
      <main>
        <br/>
        <FormularioBootstrap />
      </main>
    </div>
    </Provider>
  );
}

export default App;
