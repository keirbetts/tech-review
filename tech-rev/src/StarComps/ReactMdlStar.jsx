import React from 'react';
import StarRatingComponent from "react-star-rating-component";

const ReactMdlStar = () => {
  return (
    <div>
      <p style={{ float: "left" }}><strong>Rating:</strong></p>
      <div style={{ float: "center" }}>
        <StarRatingComponent
          name="overallRating"
          editing={false}
          renderStarIcon={() => <span>★</span>}
          starCount={5}
          value={2}
        />
      </div>
    </div>
  );
};

export default ReactMdlStar;