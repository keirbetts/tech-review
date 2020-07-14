import React from 'react';
import StarRatingComponent from "react-star-rating-component";

const StarComp = () => {
  return (
    <div>
      <p style={{ float: "left" }}><strong>Rating:</strong></p>
      <div style={{ float: "center" }}>
        <StarRatingComponent
          name="overallRating"
          editing={false}
          renderStarIcon={() => <span>★</span>}
          starCount={5}
          value={4}
        />
      </div>
    </div>
    /* <p style={{ float: "left" }}><strong>Ease of Use:</strong></p>
    <div style={{ float: "right" }}>
      <StarRatingComponent
        name="EaseOfUseRating"
        editing={false}
        renderStarIcon={() => <span>★</span>}
        starCount={5}
        value={4}
      />
    </div>
  </div> */
  );
};

export default StarComp;