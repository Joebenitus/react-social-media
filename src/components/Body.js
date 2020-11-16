import './../Body.css';
import React from "react";
import ProfileInfo from "./ProfileInfo";
import Timeline from "./Timeline";
import WhoToFollow from "./WhoToFollow";

function Body(){
  return(
    <React.Fragment>
      <div class="row">
        <div class="col-md-4">
          <ProfileInfo />
        </div>
        <div class="col-md-4">
          <Timeline />
        </div>
        <div class="col-md-4">
          <WhoToFollow />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Body;