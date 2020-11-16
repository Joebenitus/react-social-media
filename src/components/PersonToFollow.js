import React from "react";
import PropTypes from "prop-types";
import FollowButton from "./FollowButton"

function PersonToFollow(prop){
  return (
    <React.Fragment>
      <p>{prop.picture}</p>
      <p>{prop.name}</p>
      <FollowButton/>
      <hr />
    </React.Fragment>
  );
}

PersonToFollow.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default PersonToFollow;