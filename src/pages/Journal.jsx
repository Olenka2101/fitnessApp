import { useState, useEffect } from "react";
import JournalForm from "../components/journal/JournalForm";

const buttonStyle = {
  padding: "0.7em 1em",
  backgroundColor: "#f0eeef",
  color: "#222430",
  border: "none",
  borderRadius: "0.3rem",
  cursor: "pointer",
};

export default function Journal() {
  const [entries, setEntries] = useState(() => {
    try {
      const raw = localStorage.getItem("journal");
      if (raw) {
        const parsed = JSON.parse(raw);
        console.log("Initialized entries from localStorage:", parsed);
        return parsed;
      }
    } catch (error) {
      console.error("Error loading from localStorage:", error);
    }
    return [];
  });
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editMood, setEditMood] = useState("neutral");

  useEffect(() => {
    try {
      console.log("Current entries state:", entries);
      console.log("Entries length before save:", entries.length);
      const data = JSON.stringify(entries);
      console.log("Data to save:", data);
      localStorage.setItem("journal", data);
      console.log("Saved to localStorage");
    } catch (error) {
      console.error("Error saving to localStorage:", error);
      console.error("Error code:", error.code);
    }
  }, [entries]);

  const addEntry = (entry) => {
    setEntries((prev) => [{ id: Date.now().toString(), ...entry }, ...prev]);
  };

  const deleteEntry = (id) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  };

  const startEdit = (entry) => {
    setEditingId(entry.id);
    setEditText(entry.text);
    setEditMood(entry.mood);
  };

  const saveEdit = (id) => {
    setEntries((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, text: editText, mood: editMood } : e,
      ),
    );
    setEditingId(null);
    setEditText("");
    setEditMood("neutral");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
    setEditMood("neutral");
  };

  return (
    <section style={{ textAlign: "center" }}>
      <h2>Journal</h2>
      <JournalForm onAdd={addEntry} />
      {entries.length === 0 ? (
        <p>No journal entries yet.</p>
      ) : (
        <ul
          style={{
            listStyle: "none",
            display: "block",
            width: "100%",
            paddingLeft: 0,
            margin: 0,
          }}
        >
          {entries.map((e) => (
            <li
              key={e.id}
              style={{
                border: "1px solid #7a7777",
                margin: "0.5rem auto",
                padding: "0.5rem",
                background: "#f7f1f1",
                textAlign: "center",
                width: "100%",
              }}
            >
              {editingId === e.id ? (
                <div
                  style={{
                    textAlign: "left",
                    border: "1px solid #ccc",
                    padding: "1em",
                    borderRadius: "4px",
                  }}
                >
                  <textarea
                    value={editText}
                    onChange={(event) => setEditText(event.target.value)}
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "8px",
                      boxSizing: "border-box",
                    }}
                  />
                  <div style={{ marginTop: "0.5em" }}>
                    <label>
                      Mood:{" "}
                      <select
                        value={editMood}
                        onChange={(event) => setEditMood(event.target.value)}
                      >
                        <option value="happy">Happy</option>
                        <option value="neutral">Neutral</option>
                        <option value="sad">Sad</option>
                      </select>
                    </label>
                  </div>
                  <div style={{ marginTop: "0.75em" }}>
                    <button
                      onClick={() => saveEdit(e.id)}
                      style={{ marginRight: "0.5em", ...buttonStyle }}
                    >
                      Save
                    </button>
                    <button onClick={cancelEdit} style={{ ...buttonStyle }}>
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ marginBottom: "0.5em" }}>
                    {new Date(e.createdAt).toLocaleString()} — {e.mood}
                  </div>
                  <div style={{ marginBottom: "0.75em" }}>{e.text}</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "0.5em",
                    }}
                  >
                    <button onClick={() => startEdit(e)}>Edit</button>
                    <button onClick={() => deleteEntry(e.id)}>Delete</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
