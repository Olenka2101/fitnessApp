import WorkoutForm from "../components/WorkoutForm";
import WorkoutList from "../components/WorkoutList";
export default function Workouts() {
  return (
    <section>
      <h2>Workouts</h2>
      <WorkoutForm />
      <WorkoutList />
    </section>
  );
}
