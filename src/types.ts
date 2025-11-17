export type Task = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  dueDate?: string | null;
  priority?: "low" | "medium" | "high";
};
