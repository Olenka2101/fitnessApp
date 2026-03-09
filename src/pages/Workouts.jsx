import { useState } from "react";

import WorkoutList from "../components/WorkoutList";
import WorkoutForm from "../components/WorkoutForm";

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);

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
