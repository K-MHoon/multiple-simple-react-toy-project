import { Todo } from '../App';

const CHANGE_TODO_INPUT = 'CHANGE_TODO_INPUT' as const;
const ADD_TODO = 'ADD_TODO' as const;
const TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS' as const;
const REMOVE_TODO = 'REMOVE_TODO' as const;
const CLEAR_ALL_TODOS = 'CLEAR_ALL_TODOS' as const;

export const changeTodoInput = (input: string) => ({
  type: CHANGE_TODO_INPUT,
  input,
});

export const clearAllTodos = () => ({
  type: CLEAR_ALL_TODOS,
});

export interface TodoState {
  input: string;
  todos: Todo[];
  nextTodoId: number;
}

const initialState: TodoState = {
  input: '',
  todos: [],
  nextTodoId: 1,
};

type TodoAction =
  | ReturnType<typeof changeTodoInput>
  | ReturnType<typeof clearAllTodos>;

function todos(state: TodoState = initialState, action: TodoAction) {
  switch (action.type) {
    case CHANGE_TODO_INPUT:
      return {
        ...state,
        input: action.input,
      };
    default:
      return state;
  }
}

export default todos;
