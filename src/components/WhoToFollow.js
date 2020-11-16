import React from "react";
import PersonToFollow from "./PersonToFollow"

const users = [
  {
    picture: 'img',
    name: 'John Doe'
  },
  {
    picture: 'img',
    name: 'Billy Bob'
  },
  {
    picture: 'img',
    name: 'Joseph Karnafel'
  }
]

function WhoToFollow(){
  return (
    <React.Fragment>
      <h3>Who to Follow</h3>
      {users.map((post, index) =>
        <PersonToFollow picture={post.picture}
          name={post.name}
          key={index}/>
      )}
    </React.Fragment>
  )
}

export default WhoToFollow;