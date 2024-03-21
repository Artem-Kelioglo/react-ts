import { createStore, combineReducers } from 'redux';
import todoReducer from '../reducers/todoReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;