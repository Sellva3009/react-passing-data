import React from 'react'

const SiblingComponent1 = ({ onDataChange }) => {
  const handleClick = () => {
    onDataChange("This is the data from Sibling 1");
  };
  return (
    <div>
      <h2>SiblingComponent1</h2>
      <button onClick={handleClick}>Send data to Sibling2</button>
    </div>
  );
};

export default SiblingComponent1