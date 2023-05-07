export type Todo = {
  todoId: string;
  todoTitle?: string;
  todoBody?: string;
  isPinned?: boolean;
  labels?: string[];
  lastEdited: string;
};
