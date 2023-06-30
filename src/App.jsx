import { BrowserRouter, Route, Routes } from "react-router-dom";

// COMPONENTES
import Home from "./page/home";
import Navbar from "./components/navbar/Navbar";
import Perfil from "./components/Perfil/Perfil";
import Tablero from "./components/Tablero/Tablero";
import Sidebar from "./components/sidebar/Sidebar";
import LoginForm from "./components/login/LoginForm";
import Revision from "./components/Revision/Revision";
import Dashboard from "./components/dashboard/DashBoard";
import Entrevista01 from "./components/Entrevista01/Entrevista01";
import TerminosCondiciones from "./components/terminosCondiciones/TerminosCondiciones";
import PoliticaPrivacidad from "./components/politicaPrivacidad/PoliticaPrivacidad";

// ESTILO
import "./App.css";

function App() {
  return (
    // :::SOLO UTILIZADO PARA VER CADA COMPONENTE DE FORMA INDIVIDUAL:::
    // <>
    //   <LoginForm />
    //   <Navbar />
    //   <Sidebar />
    //   <Tablero />
    //   <Tablero />
    //   <Tablero />
    //   <Revision />
    //   <Perfil/>
    //   <PoliticaPrivacidad />
    //   <TerminosCondiciones />
    // </>
    // :::SOLO UTILIZANDO PARA COMPROBAR EL FUNCIONAMIENTO DE LAS RUTAS:::
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="tablero" element={<Tablero />} />
          <Route path="revision" element={<Revision />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="entrevista01" element={<Entrevista01 />} />
          <Route path="terminosCondiciones" element={<TerminosCondiciones />} />
          <Route path="políticasPrivacidad" element={<PoliticaPrivacidad />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
