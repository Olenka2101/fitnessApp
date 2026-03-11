import { useState } from "react";

const buttonStyle = {
  padding: "0.7em 1em",
  width: "50%",
  backgroundColor: "#dedde0",
  color: "#222430",
  border: "none",
  borderRadius: "0.3rem",
  cursor: "pointer",
};

export default function JournalForm({ onAdd }) {
  const [text, setText] = useState("");
  const [mood, setMood] = useState("neutral");
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    if (text.trim().length < 5) return;
    onAdd({ text: text.trim(), mood, createdAt: new Date().toISOString() });
    setText("");
    setMood("neutral");
  };

  return (
    <form
      onSubmit={submit}
      style={{
        textAlign: "center",
        padding: "1.25em",
        margin: "0 auto",
        maxWidth: 400,
      }}
    >
      <label
        htmlFor="journal-text"
        style={{ display: "block", marginBottom: "0.625em" }}
      >
        Todays Thoughts
      </label>
      <textarea
        id="journal-text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={6}
        style={{
          display: "block",
          margin: "0 auto",
          padding: "0.625em",
          width: "100%",
          maxWidth: "400px",
          boxSizing: "border-box",
        }}
      />
      <label
        htmlFor="mood"
        style={{
          display: "block",
          marginTop: "0.75em",
          marginBottom: "0.625em",
        }}
      >
        My Mood Today
      </label>
      <select
        id="mood"
        value={mood}
        onChange={(event) => setMood(event.target.value)}
        style={{
          display: "block",
          margin: "0 auto",
          marginBottom: "1em",
          width: "50%",
          maxWidth: "400px",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <option value="happy">I am Happy</option>
        <option value="neutral">I am OK</option>
        <option value="sad">I am Sad</option>
      </select>
      <button
        type="submit"
        style={{
          display: "block",
          margin: "0 auto",
          ...buttonStyle,
          backgroundColor: isButtonHovered ? "#dedde0" : "#f0eeef",
        }}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
      >
        Save
      </button>
    </form>
  );
}
