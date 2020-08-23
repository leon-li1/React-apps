import React from "react";

function Comment({ name, message }) {
  // console.log(this.key);
  return (
    <div>
      <h3>{name}</h3>
      <p>{message}</p>
    </div>
  );
}

export default Comment;
