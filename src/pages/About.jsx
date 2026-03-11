export default function About() {
  return (
    <section
      style={{
        textAlign: "center",
        maxWidth: "40rem",
        margin: "0 auto",
        padding: "0 1rem",
      }}
    >
      <h2 style={{ fontWeight: 500, fontSize: "2.25rem" }}>
        About Daily Fitness
      </h2>
      <p style={{ marginBottom: "0.75rem", lineHeight: 1.45 }}>
        Daily Fitness is a simple workout tracking and Journaling app. It helps
        users log their exercises, weights, repetitions and sets and journal
        their progress or just their thoughts. The goal of this app is to make
        it easy to keep track of workouts and stay consistent with fitness
        goals.
      </p>
      <p style={{ marginTop: 0, lineHeight: 1.45 }}>
        All data is saved in the browser using local storage, so all workouts
        and notes stay available, even after you refresh the page.
      </p>
    </section>
  );
}
