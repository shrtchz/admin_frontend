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
// import ChatBox from './components/contents/ChatBox'
function App() {
  // const storage=localStorage.getItem('admin')
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let content = null;
  return (
    // <Router>
    //   <Routes>
    // {
    //   !storage ?  <Route path="/login" element={<Login/>}/>
    //   :
    //   <Route path="/" element={<Home/>}/>
    // }
    //   {/* <Route element={<Dashboard/>}/> */}
    //   {

    //   }
    //   </Routes>
    // </Router>
    <div className="App ">
    {/* <Dashboard/> */}
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
