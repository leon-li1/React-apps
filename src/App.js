import React, { useState, useRef } from "react";
import "./App.css";
import Comment from "./Comment";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const inputBox = useRef();

  const addUser = () => {
    const name = inputBox.current.value;
    if (name === "") return;
    setCount((prevCount) => prevCount + 1);
    setUsers([...users, { id: count, name: name }]);
    inputBox.current.value = null;
  };

  const handleDelete = (target) => {
    setUsers(
      users.filter((user) => {
        return user.id !== target;
      })
    );
  };

  return (
    <div>
      <input
        className="btn btn-sml"
        ref={inputBox}
        type="text"
        style={{ border: "1px solid black" }}
        onKeyDown={(e) => {
          if (e.key === "Enter") addUser();
        }}
      />
      <button className="btn btn-secondary btn-sml" onClick={addUser}>
        Add Comment
      </button>
      <button
        className="btn btn-secondary btn-sml"
        onClick={() => setUsers([])}
      >
        Reset
      </button>
      {users.map((user) => (
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
