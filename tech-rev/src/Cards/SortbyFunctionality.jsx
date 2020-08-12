import React from 'react';

const SortbyFunctionality = (props) => {
  return (
    <div style={{ color: 'white' }}>
      <ul>
        {props.packages.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default SortbyFunctionality;