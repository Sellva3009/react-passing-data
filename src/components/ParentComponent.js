import React, { useState } from 'react'
import ChildComponent from './ChildComponent';
import SiblingComponent1 from './SiblingComponent1';
import SiblingComponent2 from './SiblingComponent2';

const ParentComponent = () => {
    const [childData, setChildData] = useState('');
    const [sibData, setSibData] = useState('');

    const handleChildData = (onDataChange) => {
      setChildData(onDataChange);
    };

    const handleSiblingData = (onDataChange) => {
      setSibData(onDataChange);
    };

    const data = "Hi, this is from parent component";

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Child component data - {childData}</p>
      <ChildComponent message={data} onDataChange={handleChildData} />

      <SiblingComponent1 onDataChange={handleSiblingData}/>
      <SiblingComponent2 data={sibData}/>
    </div>
  );
}

export default ParentComponent