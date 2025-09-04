import "./App.css";
import "./index.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

function App() {
  return (
    <section className="font-barlowCondensed">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Crew" element={<Crew />} />
        <Route path="/Technology" element={<Technology />} />
      </Routes>
    </section>
  );
}

export default App;
