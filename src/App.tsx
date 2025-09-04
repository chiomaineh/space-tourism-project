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
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </section>
  );
}

export default App;
