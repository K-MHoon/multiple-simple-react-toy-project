import TodosContainer from './container/TodosContainer';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

function App() {
  return <TodosContainer />;
}

export default App;
