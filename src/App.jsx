import { BrowserRouter, Router, Route } from "react-router-dom";

// COMPONENTES
import Home from "./page/home";
import Navbar from "./components/navbar/Navbar";
import LoginForm from "./components/login/LoginForm";

// ESTILO
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import TerminosCondiciones from "./components/TerminosCondiciones/TerminosCondiciones";
import PoliticaPrivacidad from "./components/politicaPrivacidad/PoliticaPrivacidad";
import Tablero from "./components/Tablero/Tablero";

function App() {
  return (
    <>
      {/* <LoginForm /> */}
      <Navbar />
      <Sidebar />
      <Tablero />
      <PoliticaPrivacidad />
      <TerminosCondiciones />
    </>
    // <BrowserRouter>
    //   <Router>
    //     <Route path="Home" element={<Home></Home>} />
    //   </Router>
    // </BrowserRouter>
  );
}

export default App;
