import { BrowserRouter, Router, Route } from "react-router-dom";

// COMPONENTES
import Home from "./page/home";
import Navbar from "./components/navbar/Navbar";
import LoginForm from "./components/login/LoginForm";

// ESTILO
import "./App.css";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <LoginForm />
    </>
    // <BrowserRouter>
    //   <Router>
    //     <Route path="Home" element={<Home></Home>} />
    //   </Router>
    // </BrowserRouter>
  );
}

export default App;
