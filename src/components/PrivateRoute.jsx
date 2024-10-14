// src/components/PrivateRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Adjust the path based on your Redux store structure

  return (
    <Route
      {...rest}
      element={
        isAuthenticated && localStorage.getItem('token') ? (
          element // Use the element prop directly
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
