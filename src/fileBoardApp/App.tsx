import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer';
import ItemModifyContainer from './containers/ItemModifyContainer';
import ItemReadContainer from './containers/ItemReadContainer';
import ItemRegisterContainer from './containers/ItemRegisterContainer';

const App = () => {
  return (
    <Routes>
      <Route element={<ItemListContainer />} path="/" />
      <Route element={<ItemRegisterContainer />} path="/create" />
      <Route element={<ItemModifyContainer />} path="/edit/:itemId" />
      <Route element={<ItemReadContainer />} path="/read/:itemId" />
    </Routes>
  );
};

export default App;
