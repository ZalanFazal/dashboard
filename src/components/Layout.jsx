import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import { Typography, Pagination } from '@mui/material';
import '../components/laycss/lay.css'; // this is my laycss
const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current location
  const [page, setPage] = useState(1); // State for current page

  useEffect(() => {
    // Check for authentication token
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    // Get the current page from URL query parameter
    const queryParams = new URLSearchParams(location.search);
    const pageParam = queryParams.get('page');
    if (pageParam) {
      setPage(Number(pageParam)); // Set the page state based on URL
    }
  }, [location.search]); // Update on location change

  const handlePageChange = (event, value) => {
    setPage(value);
    // Navigate to the corresponding page in the URL
    navigate(`${location.pathname}?page=${value}`);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <Navbar />

        {/* Display Current Location */}
        <div style={{ padding: '20px' }}>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Current Location: {location.pathname}
          </Typography>
        </div>

        <div style={{ padding: '20px', height: 'calc(100vh - 64px)', overflow: 'auto' }}>
          <Outlet /> {/* This will render the matched child route */}
{/* pagination */}
          
        </div>
      </div>
    </div>
  );
};

export default Layout;
