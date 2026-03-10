export default function WorkoutList({ workouts = [], onDelete }) {
  if (!workouts || workouts.length === 0) return <p>No workouts yet.</p>;

  return (
    <div>
      <h3>Logged Workouts</h3>
      {workouts.map((workout) => (
        <div key={workout.id} style={cardStyle}>
          <strong>{workout.title}</strong>
          <div>Load: {workout.load} lbs</div>
          <div>Reps: {workout.reps}</div>
          {workout.createdAt && (
            <div>Added: {new Date(workout.createdAt).toLocaleString()}</div>
          )}
          <div style={{ marginTop: 6 }}>
            <button onClick={() => onDelete(workout.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

const cardStyle = {
  border: "1px solid #7a7777",
  margin: "0.5rem 0",
  padding: "0.5rem",
  background: "#f7f1f1",
};
