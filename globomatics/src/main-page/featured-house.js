import React from "react"; ////imr
import House from "../house";

////sfc
const FeaturedHouse = props => {
  if (props.house)
    return (
      <div>
        <div className="row featuredHouse">
          <h3 className="col-md-12 text-center">Featured house</h3>
        </div>
        <House house={props.house} />
      </div>
    );

  return <div>No houses available.</div>;
};

export default FeaturedHouse;
