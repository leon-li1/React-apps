import React, { useState } from "react";
import "./App.css";
import Comment from "./Comment";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  const addUser = () => {
    setCount((prevCount) => prevCount + 1);
    users.push({
      id: count + 1,
      name: "test_name" + (count + 1),
      message: "test" + (count + 1),
    });
    setUsers(users);
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
      <button
        className="btn btn-secondary btn-sml"
        onClick={() => setUsers([])}
      >
        Reset
      </button>
      <button className="btn btn-secondary btn-sml" onClick={addUser}>
        Add Comment
      </button>
      {users.map((user) => (
        <Comment
          name={user.name}
          message={user.message}
          handleDelete={() => handleDelete(user.id)}
        />
      ))}
    </div>
  );
}

export default App;
