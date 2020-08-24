import React from "react";

function Comment({ name, message, handleDelete }) {
  return (
    <div>
      <button
        className="btn btn-secondary btn-danger m-2"
        onClick={handleDelete}
        // style={{ height: 20, width: 20 }}
      >
        X
      </button>
      <h3>{name}</h3>
      <p>{message}</p>
    </div>
  );
}

export default Comment;
