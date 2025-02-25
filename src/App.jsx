import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { START, Config, THANK, MODE, MINION, Join, Gameplay } from "./Components"; // เพิ่ม Gameplay

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<START />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/MINION" element={<MINION />} />
        <Route path="/MODE" element={<MODE />} />
        <Route path="/Config" element={<Config />} />
        <Route path="/THANK" element={<THANK />} />
        <Route path="/Gameplay" element={<Gameplay />} /> 
      </Routes>
    </Router>
  );
}

export default App;
