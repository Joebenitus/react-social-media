import React from "react";
import MakeTweet from "./MakeTweet"
import Tweet from "./Tweet";

const tweets = [
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
      <h3>Timeline</h3>
      <MakeTweet />
      {tweets.map((post, index) =>
        <Tweet picture={post.picture}
          name={post.name}
          message={post.message}
          key={index}/>
      )}
    </React.Fragment>
  )
}

export default Timeline;