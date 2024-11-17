import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'

const UserProfile = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <p>Please log in</p>
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Welcome, {user.name}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default UserProfile