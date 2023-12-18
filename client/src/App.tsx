import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import CustomersPage from './pages/Customers/CustomersPage';
import OrdersPage from './pages/Orders/OrdersPage';

function App() {
  const isLoggedIn = () => {
    return false; //by default
  };

  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={isLoggedIn() ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
            
            {/* <Route path="/login" element={isLoggedIn() ? <Navigate to="/dashboard" /> : <LoginPage />} /> */}
            <Route path="/login" element={ <LoginPage />} />
            
            {/* <Route path="/dashboard" element={isLoggedIn() ? <DashboardPage /> : <Navigate to="/login" />} /> */}
            <Route path="/dashboard" element={<DashboardPage />} />
            
            {/* <Route path="/dashboard/customers" element={isLoggedIn() ? <CustomersPage /> : <Navigate to="/login" />} /> */}
            <Route path="/dashboard/customers" element={<CustomersPage />} />
            
            {/* <Route path="/dashboard/orders" element={isLoggedIn() ? <OrdersPage /> : <Navigate to="/login" />} /> */}
            <Route path="/dashboard/orders" element={<OrdersPage />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
