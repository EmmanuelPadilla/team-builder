import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

const userList = [];

function App() {
  const [users, setUsers] = useState(userList);
  const submitForm = (newUser) => {
    console.log(newUser);
    setUsers([...users, newUser]);
    //this is where i should set users
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Form submit={submitForm} />
          {users.map((user, idx) => {
            return (
              <div key={idx}>
                {user.name} is a {user.role}. Their email is {user.email}
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
