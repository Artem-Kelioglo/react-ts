// src/reducers/todoReducer.ts
import { TodoAction, TodoActionTypes } from "../actions/todoActions";

interface Todo {
  id: number;
  text: string;
}

const initialState: Todo[] = [];

const todoReducer = (state = initialState, action: TodoAction): Todo[] => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return [...state, { id: action.payload.id, text: action.payload.text }];
    case TodoActionTypes.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case TodoActionTypes.EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.newText }
          : todo
      );
    default:
      return state;
  }
};

export default todoReducer;
