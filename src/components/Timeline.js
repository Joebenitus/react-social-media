import React from "react";
import FriendMessage from "./FriendMessage";

const friendsMessages = [
  {
    picture: 'img',
    name: "Josh",
    message: 'Lorem ipsum'
  },
  {
    picture: 'img',
    name: 'Beatrice',
    message: 'Lorem ipsum'
  }
];

function Timeline(){
  return (
    <React.Fragment>
      <MakeTweet />
      <hr/>
      {friendsMessages.map((post, index) =>
        <FriendMessage profilePicture={post.picture}
          name={post.name}
          message={post.message}/>
      )}
    </React.Fragment>
  )
}

export default Timeline;