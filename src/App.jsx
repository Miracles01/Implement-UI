import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { START, Config } from "./Components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<START />} />
        <Route path="/Config" element={<Config />} />
      </Routes>
    </Router>
  );
}

export default App;
