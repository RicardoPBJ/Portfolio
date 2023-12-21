import { Routes, Route } from "react-router-dom";
import "./App.css";
import { About, Backend, Frontend, Home } from "./Pages";

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/about" Component={About} />
      <Route exact path="/frontend" Component={Frontend} />
      <Route exact path="/backend" Component={Backend} />
    </Routes>
  );
}

export default App;
