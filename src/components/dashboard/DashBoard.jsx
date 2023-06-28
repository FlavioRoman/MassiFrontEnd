// COMPONENTES
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
// REACT ROUTER
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Dashboard;
