import React from 'react'

const SiblingComponent2 = ({ data }) => {
  return (
    <div>
      <h2>SiblingComponent2</h2>
      <p>Data from Sibling1 - {data}</p>
    </div>
  );
};

export default SiblingComponent2