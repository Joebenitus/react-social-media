import React from "react";
import PropTypes from "prop-types";

function Tweet(prop){
  return (
    <React.Fragment>
      <p>{prop.picture}</p>
      <p>Name: {prop.name}</p>
      <p>Message: {prop.message}</p>
      <hr />
    </React.Fragment>
  )
}

Tweet.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string
};

export default Tweet;