import { useState, useEffect, useCallback } from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutList from "../components/WorkoutList";
import { loadWorkouts, saveWorkouts } from "../utils/storage";

export default function Workouts() {
  const [workouts, setWorkouts] = useState(() => loadWorkouts("workouts"));

  useEffect(() => {
    saveWorkouts("workouts", workouts);
  }, [workouts]);

  const addWorkout = useCallback((workout) => {
    const newItem = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...workout,
    };
    setWorkouts((prev) => [...prev, newItem]);
  }, []);
  const deleteWorkout = useCallback((id) => {
    setWorkouts((prev) => prev.filter((workout) => workout.id !== id));
  }, []);

  return (
    <section>
      <h2 style={{ fontWeight: 500, fontSize: "2.25rem" }}>Workouts</h2>
      <WorkoutForm onAdd={addWorkout} />
      <WorkoutList workouts={workouts} onDelete={deleteWorkout} />
    </section>
  );
}
