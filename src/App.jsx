import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { START, Config,THANK,MODE ,} from "./Components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<START />} />
        <Route path="/MODE" element={<MODE />} />
        <Route path="/Config" element={<Config />} />
        <Route path="/THANK" element={<THANK />} />
      </Routes>
    </Router>
  );
}

export default App;
