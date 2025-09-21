import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (username.trim() === "" || age === "") {
      setMessage("Please enter both username and age.");
      return;
    }

    const numericAge = Number(age);
    if (numericAge >= 17) {
      setMessage(`Welcome, ${username}! You are allowed.`);
    } else {
      setMessage(`Sorry, ${username}. You must be at least 17.`);
    }
  };

  return (
    <div>
      <h2>Login Form</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;