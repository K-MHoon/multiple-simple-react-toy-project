import { Route, Routes } from 'react-router-dom';
import AdminSetupPage from './components/member/AdminSetupPage';
import SignInPage from './pages/auth/SignInPage';
import HomePage from './pages/HomePage';

export interface LoginInput {
  userId: string;
  password: string;
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/member/setup" element={<AdminSetupPage />} />
    </Routes>
  );
};

export default App;
