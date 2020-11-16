import React from "react";
import ProfileInfo from "./ProfileInfo";
import Timeline from "./Timeline";
import AddFriend from "./AddFriend";

function ProfilePage(){
  return(
    <React.Fragment>
      <ProfileInfo />
      <Timeline />
      <AddFriend />
    </React.Fragment>
  )
}

export default ProfilePage;