import React from "react";
import ProfileInfo from "./ProfileInfo";
import Timeline from "./Timeline";
import AddFollow from "./WhoToFollow";

function Body(){
  return(
    <React.Fragment>
      <ProfileInfo />
      <Timeline />
      <AddFollow />
    </React.Fragment>
  )
}

export default Body;