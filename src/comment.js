import React, { useState } from "react";

function Comment({ name, handleDelete }) {
  const [count, setCount] = useState(1);
  let disabledClass = count === 1 ? " disabled" : "";

  return (
    <div
      style={{
        border: "2px solid blue",
        borderRadius: 5,
        margin: 1,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h3>{name}</h3>
      <button
        className={"btn btn-m" + disabledClass}
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <span
        className="badge badge-primary m-2"
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {count}
      </span>
      <button
        className="btn btn-m"
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
      <button className="btn btn-danger m-2 btn-xs" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Comment;
