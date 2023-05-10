import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
// import SideBar from './SideBar/SideBar';
import SideBar from "./SideBar/SideBar";
import Headerbar from "./Headers";
import ProtectedRoute from "../pages/ProtectedRoute";
import { BrowserRouter as Router,Route, Routes, Outlet, Navigate} from "react-router-dom";
import MainContent from "./MainContent";
import Home from "./contents/Home";
import Accesslogs from "./contents/Accesslogs";
import Advertising from "./contents/Advertising";
import Consultations from './contents/Consultations'
import Shoutbox from "./contents/Shoutbox";
import Messages from './contents/Messages'
import Invoices from './contents/Invoices'
import Subscription from './contents/Subscription'
import Users from './contents/Users'
import Posts from './contents/Posts'
import Forecast from './contents/Forecast'
import Payments from './contents/Payments'
import Media from './contents/Media'
import Miscellaneous from './contents/Miscellaneous'
import Fundraisers from './contents/Fundraisers'
import Settings from './contents/Settings'

// const useAuth=()=>{
//   const user=localStorage.getItem('user')
//   if(user){
//     return true
//   } else {
//     return false
//   }
// }

const Dashboard = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const showSidebar = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
//   useEffect(()=>{
//     const getToken =localStorage.getItem('token')
// console.log(getToken)

//   },[])

  return (
    <Router>
      <Navbar showSidebar={showSidebar} />

    
      <SideBar isOpen={isOpen}>
      <Routes>
          <Route path="/"  exact element={<Home />} />
          <Route path="/accesslogs" element={<Accesslogs/>} />
          <Route path="/advertising" element={<Advertising/>} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/fundraisers" element={<Fundraisers />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/media" element={<Media />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/miscellaneous" element={<Miscellaneous />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/shoutbox" element={<Shoutbox />} />
          <Route path="/subscription" element={<Subscription/>} />
          <Route path="/users" element={<Users />} />
      </Routes>

      </SideBar>

      <Footer />
      
    </Router>
  );
};

export default Dashboard;

