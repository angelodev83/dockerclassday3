import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello from Frontend 🌐</h1>
      <p>This is served by Nginx inside Docker 🚀</p>
      <p>Backend is available at: <code>http://localhost:3000</code></p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
