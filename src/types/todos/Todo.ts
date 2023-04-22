export type Todo = {
  todoId: string;
  title: string;
  body: string;
  isPinned: boolean;
  labels: string[];
  lastEdited: string;
};
