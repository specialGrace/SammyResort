import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard/Dashboard';

const DashboardScreen = () => {
  return (
    <div>
      <Dashboard />
      <Link to="/dashboard/profile">Profile</Link>
      <Link to="/dashboard/orders">Orders</Link>
      <Link to="/dashboard/receipts">Receipts</Link> 
    </div>
  );
}

export default DashboardScreen