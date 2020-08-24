import React from "react";

function Comment({ name, message, handleDelete }) {
  return (
    <div
      style={{
        border: "2px solid blue",
        borderRadius: 5,
        margin: 1,
        display: "flex",
      }}
    >
      <h3>{name}</h3>
      <p>{message}</p>
      <button className="btn btn-danger m-2 btn-xs" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Comment;
