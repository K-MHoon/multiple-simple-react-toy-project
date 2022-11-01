import { Route } from 'react-router-dom';
import BoardListContainer from './containers/BoardListContainer';
import BoardModifyContainer from './containers/BoardModifyContainer';
import BoardReadContainer from './containers/BoardReadContainer';
import BoardRegisterContainer from './containers/BoardRegisterContainer';

function App() {
  return (
    <>
      <Route component={BoardListContainer} path="/" exact />
      <Route component={BoardRegisterContainer} path="/create" />
      <Route component={BoardModifyContainer} path="/edit/:boardNo" />
      <Route component={BoardReadContainer} path="/read/:boardNo " />
    </>
  );
}

export default App;
