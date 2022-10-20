import React from 'react';

import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { changeTodoInput, clearAllTodos } from '../modules/todos';
import { TodoState } from '../modules/todos';
import { Dispatch } from 'redux';

type PropsState = ReturnType<typeof mapStateToProps>;
type PropsDispatch = ReturnType<typeof mapDispatchToProps>;

interface Props extends PropsState, PropsDispatch {}

const TodosContainer = ({ input, clearAllTodos }: Props) => {
  return <Todos input={input} onClearAll={clearAllTodos} />;
};

const mapStateToProps = (state: TodoState) => ({
  input: state.input,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeTodoInput: (input: string) => {
    dispatch(changeTodoInput(input));
  },
  clearAllTodos: () => {
    dispatch(clearAllTodos());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
