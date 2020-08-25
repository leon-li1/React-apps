import React, { useState, useRef } from "react";
import "./App.css";
import Comment from "./Comment";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const inputBox = useRef();

  const addItem = () => {
    const name = inputBox.current.value;
    if (name === "") return;
    setCount((prevCount) => prevCount + 1);
    setItems([...items, { id: count, name: name }]);
    inputBox.current.value = null;
  };

  const handleDelete = (target) => {
    setItems(items.filter((user) => user.id !== target));
  };

  return (
    <div>
      <input
        className="btn btn-sml"
        ref={inputBox}
        type="text"
        style={{ border: "1px solid black" }}
        onKeyDown={(e) => {
          if (e.key === "Enter") addItem();
        }}
      />
      <button className="btn btn-secondary btn-sml" onClick={addItem}>
        Add Comment
      </button>
      <button
        className="btn btn-secondary btn-sml"
        onClick={() => setItems([])}
      >
        Reset
      </button>
      <span className="btn badge-primary" style={{ height: 35 }}>
        Items: {" " + items.length}
      </span>
      {items.map((user) => (
        <Comment
          key={user.id}
          name={user.name}
          handleDelete={() => handleDelete(user.id)}
        />
      ))}
    </div>
  );
}

export default App;
