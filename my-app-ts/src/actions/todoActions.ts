let nextTodoId = 0;

export const addTodo = (text: string) => ({
  type: "ADD_TODO",
  payload: {
    id: nextTodoId++,
    text,
    completed: false,
  },
});

export const editTodo = (id: number, newText: string) => ({
  type: "EDIT_TODO",
  payload: { id, newText },
});

export const deleteTodo = (id: number) => ({
  type: "DELETE_TODO",
  payload: id,
});

export const toggleTodo = (id: number) => ({
  type: "TOGGLE_TODO",
  payload: id,
});
