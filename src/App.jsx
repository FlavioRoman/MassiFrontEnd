import { BrowserRouter, Router, Route } from "react-router-dom";

// COMPONENTES
import Home from "./page/home";
import Navbar from "./components/navbar/Navbar";
import Tablero from "./components/Tablero/Tablero";
import Sidebar from "./components/sidebar/Sidebar";
import LoginForm from "./components/login/LoginForm";
import Revision from "./components/Revision/Revision";
import PoliticaPrivacidad from "./components/politicaPrivacidad/PoliticaPrivacidad";
// import TerminosCondiciones from "./components/terminosCondiciones/TerminosCondiciones";

// ESTILO
import "./App.css";

function App() {
  return (
    <>
      {/* <LoginForm /> */}
      <Navbar />
      <Sidebar />
      <Tablero />
      <Tablero />
      <Tablero />
      <Revision />
      <PoliticaPrivacidad />
      {/* <TerminosCondiciones /> */}
    </>
    // <BrowserRouter>
    //   <Router>
    //     <Route path="Home" element={<Home></Home>} />
    //   </Router>
    // </BrowserRouter>
  );
}

export default App;
