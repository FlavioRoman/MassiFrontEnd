import { BrowserRouter, Route, Routes } from "react-router-dom";

// COMPONENTES
import Home from "./page/home";
import Navbar from "./components/navbar/Navbar";
import Perfil from "./components/Perfil/Perfil";
import Tablero from "./components/Tablero/Tablero";
import Sidebar from "./components/sidebar/Sidebar";
import LoginForm from "./components/login/LoginForm";
import Revision from "./components/Revision/Revision";
import Mensajes from "./components/Mensajes/Mensajes";
import Dashboard from "./components/dashboard/DashBoard";
import Entrevista from "./components/Entrevista/Entrevista";
import PoliticaPrivacidad from "./components/politicaPrivacidad/PoliticaPrivacidad";
import TerminosCondiciones from "./components/terminosCondiciones/TerminosCondiciones";

// ESTILO
import "./App.css";
import Evaluacion from "./components/Evaluacion/Evaluacion";

function App() {
  return (
    // :::::SOLO UTILIZADO PARA VER CADA COMPONENTE DE FORMA INDIVIDUAL:::::
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
    // :::::SOLO UTILIZANDO PARA COMPROBAR EL FUNCIONAMIENTO DE LAS RUTAS:::::
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="tablero" element={<Tablero />} />
          <Route path="revision" element={<Revision />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="mensajes" element={<Mensajes />} />
          <Route path="entrevista" element={<Entrevista />} />
          <Route path="evaluacion" element={<Evaluacion />} />
          <Route path="terminosCondiciones" element={<TerminosCondiciones />} />
          <Route path="políticasPrivacidad" element={<PoliticaPrivacidad />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
