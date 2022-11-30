import { Route, Routes } from 'react-router-dom';
import SignInPage from './pages/auth/SignInPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
};

export default App;
