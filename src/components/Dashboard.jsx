import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import SideBar from "./SideBar/SideBar";
import { BrowserRouter as Router,Route, Routes, Outlet, Navigate} from "react-router-dom";
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
import PostsIndex from './Posts/PostsIndex'
import Forecast from './contents/Forecast'
import Payments from './contents/Payments'
import Media from './contents/Media'
import Miscellaneous from './contents/Miscellaneous'
import Fundraisers from './contents/Fundraisers'
import Settings from './contents/Settings'
import AllUsers from "./contents/AllUsers";
import AllAdmins from "./contents/AllAdmins";
import Categories from './Categories/Categories'
import Subcategories from './Categories/Subcategories'
import Currencies from './Categories/Currencies'
import Markets from './Categories/Markets'
import FeesTaxes from './Categories/FeesTaxes'
import Picks from './Categories/Picks'
import Tips from './Categories/Tips'
import AddAdmin from "./Categories/AddAdmin";
import EditAdmin from "./EditAdmin";
import DeleteAdmin from "./DeleteAdmin";
// import Post from "./Posts/PostsIndex";
// import PostsIndex from "./Posts/PostsIndex";

// const useAuth=()=>{
//   const user=localStorage.getItem('user')
//   if(user){
//     return true
//   } else {
//     return false
//   }
// }

const Dashboard = ({onLogout}) => {
  const [isOpen, setIsOpen] = useState(false);
  const showSidebar = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };


  return (
    <Router>
      <Navbar showSidebar={showSidebar}  onLogout={onLogout}/>
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
          <Route  path="posts/*" element={<PostsIndex />} />
          <Route path="settings" element={<Settings />}>
            <Route path="/settings/categories" element={<Categories/>}/>
            <Route path="/settings/subcategories" element={<Subcategories/>}/>
            <Route path="/settings/markets" element={<Markets/>}/>
            <Route path="/settings/fees&taxes" element={<FeesTaxes/>}/>
            <Route path="/settings/tips" element={<Tips/>}/>
            <Route path="/settings/picks" element={<Picks/>}/>
            <Route path="/settings/currencies" element={<Currencies/>}/>
            <Route path="/settings/categories/addadmin" element={<AddAdmin/>}/>
            <Route path="/settings/categories/edit" element={<EditAdmin/>}/>
            <Route path="/settings/categories/delete" element={<DeleteAdmin/>}/>

          </Route>
          <Route path="/shoutbox" element={<Shoutbox />} />
          <Route path="/subscription" element={<Subscription/>} />
          <Route path="users" element={<Users />} >
          <Route path="/users/allusers" element={<AllUsers/>} />
            <Route path="/users/alladmins" element={<AllAdmins/>} />
          </Route>
         
      </Routes>

      </SideBar>

      <Footer />
      
    </Router>
  );
};

export default Dashboard;

