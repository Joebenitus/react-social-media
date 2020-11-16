import React from "react";

function FriendMessage(prop){
  return (
    <React.Fragment>
      {prop.picture}
      {prop.name}
      {prop.message}
    </React.Fragment>
  )
}

export default FriendMessage;