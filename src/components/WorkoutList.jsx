export default function WorkoutList() {
  const mock = [
    { id: "a1", title: "Run", load: 0, reps: 0 },
    { id: "b2", title: "Squat", load: 40, reps: 8 },
    { id: "c3", title: "Jump", load: 0, reps: 50 },
  ];
  return (
    <div>
      <h3>Workout List</h3>
      <ul>
        {mock.map((workout) => (
          <li
            key={workout.id}
            style={{
              border: "1px solid #ccc",
              margin: "0.5rem 0",
              padding: "0.5rem",
            }}
          >
            <strong>{workout.title}</strong>
            <div>Load: {workout.load} kg</div>
            <div>Reps: {workout.reps}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
