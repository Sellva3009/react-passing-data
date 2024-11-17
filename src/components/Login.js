import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const { login } = useContext(AuthContext)

    const handleLogin = () => {
        login({ name: username });
    }

    return (
        <div>
            <h2>Login</h2>
            <input 
                type="text" 
                value={username}
                placeholder='Enter username' 
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login