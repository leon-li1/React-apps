import React, { useState } from "react";
import "./App.css";
import Comment from "./comment.js";

function App() {
  const [state, setState] = useState(0);
  const [users, setUsers] = useState([]);

  const reset = () => {
    setState(0);
    setUsers([]);
  };
  const addUser = () => {
    setState(state + 1);
    if (state === 0) users.push({ name: "Abby", message: "test" });
    else if (state === 1) users.push({ name: "Bob", message: "test2" });
    else if (state === 2) users.push({ name: "Carl", message: "test3" });
    else
      users.push({
        name: "test_name" + (state + 1),
        message: "test" + (state + 1),
      });
    setUsers(users);
  };

  return (
    <div>
      <button className="btn btn-secondary btn-sml" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-secondary btn-sml" onClick={addUser}>
        Add Comment
      </button>
      {users.map((user) => (
        <Comment name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;
