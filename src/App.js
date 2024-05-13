import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormularioBootstrap from "./components/FormularioBootstrap";
import NavbarBootstrap from "./components/NavbarBootstrap";
import Login from "./components/Login";
import store from "./store";
import ImagenBienvenida from "./components/ImagenBienvenida";
import { RouterSharp } from "@mui/icons-material";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <NavbarBootstrap />
          </header>
          <main>
            <Routes>
              <Route exact path="/" element={<ImagenBienvenida/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/formulario" element={<FormularioBootstrap/>} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
