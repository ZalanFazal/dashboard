import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout'; // Ensure the path is correct
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Reports from './pages/Reports'; // Ensure you have Reports.jsx
import Settings from './pages/Settings';
import Products from './pages/Products';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        
        {/* Redirect from root to /dashboard */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} /> {/* Redirect to /dashboard */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="products" element={<Products />} />
          <Route path="settings" element={<Settings/>} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
