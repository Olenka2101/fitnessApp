import { useState, useEffect } from "react";

export default function WorkoutForm({ onAdd, initialData = null }) {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [error, setError] = useState("");
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    if (initialData) {
      const title = initialData.title || "";
      const load = initialData.load || "";
      const reps = initialData.reps || "";
      const sets = initialData.sets || "";

      setTitle(title);
      setLoad(load);
      setReps(reps);
      setSets(sets);
    }
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim().length < 2) {
      setError("Workout type must be at least 2 characters.");
      return;
    }
    if (
      !load ||
      Number(load) < 0 ||
      !reps ||
      Number(reps) < 1 ||
      !sets ||
      Number(sets) < 1
    ) {
      setError("Load must be >= 0 and reps/sets must be >= 1.");
      return;
    }

    onAdd({
      title: title.trim(),
      load: Number(load),
      reps: Number(reps),
      sets: Number(sets),
    });

    setTitle("");
    setLoad("");
    setReps("");
    setSets("");
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
        style={inputStyle}
      />

      <label htmlFor="load">Weight (lbs)</label>
      <input
        id="load"
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        style={inputStyle}
      />

      <label htmlFor="reps">Reps</label>
      <input
        id="reps"
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        style={inputStyle}
      />

      <label htmlFor="sets">Sets</label>
      <input
        id="sets"
        type="number"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        style={inputStyle}
      />

      <button
        type="submit"
        style={{
          ...buttonStyle,
          backgroundColor: isButtonHovered ? "#dedde0" : "#f0eeef",
        }}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
      >
        Add
      </button>

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
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  maxWidth: 400,
  gap: 8,
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  boxSizing: "border-box",
};

const buttonStyle = {
  padding: "0.7em 1em",
  width: "50%",
  backgroundColor: "#dedde0",
  color: "#222430",
  border: "none",
  borderRadius: "0.3rem",
  cursor: "pointer",
};
