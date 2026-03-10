export function loadWorkouts(key) {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

export function saveWorkouts(key, workouts) {
  const data = JSON.stringify(workouts);

  localStorage.setItem(key, data);
}
