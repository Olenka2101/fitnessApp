import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Workouts from "./pages/Workouts";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Workouts />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
