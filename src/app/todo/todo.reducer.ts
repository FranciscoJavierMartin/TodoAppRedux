import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const INITIAL_STATE: Todo[] = [];

export function todoReducer(
  state = INITIAL_STATE,
  action: fromTodo.Actions
): Todo[] {
  let res;

  switch (action.type) {
    case fromTodo.ADD_TODO:
      const todo = new Todo(action.text);
      res = [...state, todo];
      break;
    case fromTodo.TOGGLE_TODO:
      res = state.map(todoEdit => {
        let resTodo: Todo;

        if (todoEdit.id === action.id) {
          resTodo = {
            ...todoEdit,
            completed: !todoEdit.completed
          };
        } else {
          resTodo = todoEdit;
        }

        return resTodo;
      });
      break;
    case fromTodo.TOGGLE_ALL_TODO:
      res = state.map(currentTodo => ({
        ...currentTodo,
        completed: action.completed
      }));
      break;
    case fromTodo.EDIT_TODO:
      res = state.map(todoEdit => {
        let resTodo: Todo;

        if (todoEdit.id === action.id && todoEdit.text !== '') {
          resTodo = {
            ...todoEdit,
            text: action.text
          };
        } else {
          resTodo = todoEdit;
        }

        return resTodo;
      });
      break;
    case fromTodo.REMOVE_TODO:
      res = state.filter(x => x.id !== action.id);
      break;
    case fromTodo.REMOVE_ALL_TODO:
      res = state.filter(x => !x.completed);
      break;
    default:
      res = state;
  }

  return res;
}
