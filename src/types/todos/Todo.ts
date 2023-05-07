export type Todo = {
  todoId: string;
  todoTitle?: string;
  todoBody?: string;
  theme?: string;
  images?: string;
  reminder?: string;
  hasReminder?: boolean;
  isPinned?: boolean;
  labels?: string[];
  lastEdited: string;
};
