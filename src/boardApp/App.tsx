import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardListContainer from './containers/BoardListContainer';
import BoardModifyContainer from './containers/BoardModifyContainer';
import BoardReadContainer from './containers/BoardReadContainer';
import BoardRegisterContainer from './containers/BoardRegisterContainer';

const App = () => {
  return (
    <Routes>
      <Route element={<BoardListContainer />} path="/" />
      <Route element={<BoardRegisterContainer />} path="/create" />
      <Route element={<BoardModifyContainer />} path="/edit/:boardNo" />
      <Route element={<BoardReadContainer />} path="/read/:boardNo " />
    </Routes>
  );
};

export default App;
