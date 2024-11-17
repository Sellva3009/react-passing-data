import React from 'react'

const ChildComponent = ({message, onDataChange}) => {
    const handleClick = () => {
        onDataChange('Data from Child')
    }
  return (
    <div>
      <h2>ChildComponent</h2>
      <p>Data from the Parent Component - {message}</p>

        <button onClick={handleClick}>Send data to parent</button>
    </div>
  );
}

export default ChildComponent