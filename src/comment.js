import React from "react";

function Comment({ name, message }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{message}</p>
    </div>
  );
}

export default Comment;
