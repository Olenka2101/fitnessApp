import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Workouts from "./pages/Workouts";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Journal from "./pages/Journal";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Workouts />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="journal" element={<Journal />} />
      </Route>
    </Routes>
  );
}

export default App;
