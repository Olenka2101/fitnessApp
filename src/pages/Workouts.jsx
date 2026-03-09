import { useState, useEffect } from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutList from "../components/WorkoutList";

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const storedWorkouts = localStorage.getItem("workouts");
    if (storedWorkouts) setWorkouts(JSON.parse(storedWorkouts));
  }, []);

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (workout) => {
    const newItem = { id: Date.now().toString(), ...workout };
    setWorkouts((prev) => [...prev, newItem]);
  };

  return (
    <section>
      <h2>Workouts</h2>
      <WorkoutForm onAdd={addWorkout} />
      <WorkoutList workouts={workouts} />
    </section>
  );
}
