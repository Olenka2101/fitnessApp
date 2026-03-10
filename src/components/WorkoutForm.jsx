import { useState } from "react";

export default function WorkoutForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim().length < 2) {
      setError("Title needs to be at least 2 characters.");
      return;
    }

    onAdd({ title, load: Number(load), reps: Number(reps) });
    setTitle("");
    setLoad("");
    setReps("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h3>Add Workout</h3>

      <label>Title</label>
      <input value={title} onChange={(event) => setTitle(event.target.value)} />

      <label>Load (lbs)</label>
      <input
        type="number"
        value={load}
        onChange={(event) => setLoad(event.target.value)}
      />

      <label>Reps</label>
      <input
        type="number"
        value={reps}
        onChange={(event) => setReps(event.target.value)}
      />

      <button type="submit">Add</button>

      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
}
