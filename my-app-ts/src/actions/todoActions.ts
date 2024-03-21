// src/actions/todoActions.ts
export enum TodoActionTypes {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  EDIT_TODO = "EDIT_TODO",
}

interface AddTodoAction {
  type: TodoActionTypes.ADD_TODO;
  payload: {
    id: number;
    text: string;
  };
}

interface DeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO;
  payload: {
    id: number;
  };
}

interface EditTodoAction {
  type: TodoActionTypes.EDIT_TODO;
  payload: {
    id: number;
    newText: string;
  };
}

export type TodoAction = AddTodoAction | DeleteTodoAction | EditTodoAction;

export const addTodo = (id: number, text: string): AddTodoAction => ({
  type: TodoActionTypes.ADD_TODO,
  payload: { id, text },
});

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: TodoActionTypes.DELETE_TODO,
  payload: { id },
});

export const editTodo = (id: number, newText: string): EditTodoAction => ({
  type: TodoActionTypes.EDIT_TODO,
  payload: { id, newText },
});
