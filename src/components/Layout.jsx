// Layout.jsx
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';

const Layout = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/login")
    }
  },[!localStorage.getItem("token")])
  return (
    
    <div style={{ display: 'flex', height:'100vh'}} >
      <Sidebar  />
      <div style={{ flexGrow: 1 }}>
        <Navbar />
        <div style={{ padding: '20px', height:'100vh', overflow:'auto'}}>
          <Outlet /> {/* This will render the matched child route */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
