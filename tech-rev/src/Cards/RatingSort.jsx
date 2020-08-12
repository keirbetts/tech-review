import React from 'react';

const RatingSort = (props) => {
  return (
    <div style={{ color: 'white' }}>
      <ul>
        {props.ratings.map((item, index) => < li key={index} > {item}</li>)}
      </ul>
    </div >
  );
};

export default RatingSort; 