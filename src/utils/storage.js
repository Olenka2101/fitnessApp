export function loadWorkouts(key) {
  const data = localStorage.getItem(key);
  console.log("Loading workouts:", data);

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

export function saveWorkouts(key, workouts) {
  const data = JSON.stringify(workouts);
  console.log("Saving workouts:", data);

  localStorage.setItem(key, data);
}
