import "./App.css";
import "./index.css";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";
import Destination from "./components/destination";
import Crew from "./components/crew";
import Technology from "./components/technology";

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
