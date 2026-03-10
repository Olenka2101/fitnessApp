import { useState, useEffect } from "react";

export default function WorkoutForm({ onAdd, initialData = null }) {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title ?? "");
      setLoad(initialData.load ?? "");
      setReps(initialData.reps ?? "");
    }
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim().length < 2) {
      setError("Workout type must be at least 2 characters.");
      return;
    }
    if (!load || Number(load) < 0 || !reps || Number(reps) < 1) {
      setError("Load must be >= 0 and reps must be >= 1.");
      return;
    }

    onAdd({ title: title.trim(), load: Number(load), reps: Number(reps) });

    setTitle("");
    setLoad("");
    setReps("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Add workout form"
      style={formStyle}
    >
      <h3>Add Workout</h3>

      <label htmlFor="title">Workout type</label>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="load">Weight (lbs)</label>
      <input
        id="load"
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
      />

      <label htmlFor="reps">Reps</label>
      <input
        id="reps"
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />

      <button type="submit">Add</button>

      {error && (
        <div role="alert" style={{ color: "red" }}>
          {error}
        </div>
      )}
    </form>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  maxWidth: 400,
  gap: 8,
};
