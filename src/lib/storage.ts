const TASKS_KEY = "tm:tasks:v1";

export const loadTasks = (): Task[] => {
  try {
    const raw = localStorage.getItem(TASKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};
