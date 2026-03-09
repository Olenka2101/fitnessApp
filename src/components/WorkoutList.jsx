export default function WorkoutList({ workouts = [], onDelete }) {
  if (workouts.length === 0) return <p>No workouts yet.</p>;
  return (
    <div>
      <h3>Logged Workouts</h3>
      {workouts.map((workout) => (
        <div
          key={workout.id}
          style={{
            border: "1px solid #7a7777",
            margin: "0.5rem 0",
            padding: "0.5rem",
            background: "#ddcece",
          }}
        >
          <strong>{workout.title}</strong>
          <div>Load: {workout.load} lbs</div>
          <div>Reps: {workout.reps}</div>
          <button onClick={() => onDelete(workout.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
