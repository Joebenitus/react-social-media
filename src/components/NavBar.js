import React from "react";

function NavBar(){
  return (
    <React.Fragment>
      <div class='row'>
        <h3>Home - Notifications - Messages</h3>
        <input type="text"></input>
        <button>Tweet</button>
        <hr></hr>
      </div>
    </React.Fragment>
  )
}

export default NavBar;