import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Please log in to access the dashboard</p>
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard, {user.name}!</p>
    </div>
  );
}

export default Dashboard