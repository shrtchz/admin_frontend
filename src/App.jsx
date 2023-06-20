import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import './App.css'
import Login from "./pages/Login";
import Subadmin from "./pages/Subadmin";
import Home from "./components/contents/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from "./components/Dashboard";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Outlet,
// } from "react-router-dom";
import Accesslogs from "./components/contents/Accesslogs";
import SideBar from "./components/SideBar/SideBar";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  let content = null;
  return (
   
    <div className="App ">
  
    {
      isLoggedIn ? (
        <>
        <Dashboard  onLogout={setIsLoggedIn}/> 
       
        </>
      ): <Login  onLogin={setIsLoggedIn}/>
    }
    {/* <Dashboard/> */}
    </div>
   
  );
}

export default App;
