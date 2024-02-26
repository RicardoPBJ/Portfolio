import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { About, Backend, Frontend, Home } from "./Pages";

function App() {
  return (
    <div>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/frontend" Component={Frontend} />
        <Route exact path="/backend" Component={Backend} />
      </Routes>
    </div>
  );
}

export default App;
