import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeComponent = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    const style = {
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        marginTop: '20px',
    }

  return (
    <div style={style}>
        <p>The current theme is {theme} mode</p>
        {children}
    </div>
  )
}

export default ThemeComponent