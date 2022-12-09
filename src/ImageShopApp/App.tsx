import { Route, Routes } from 'react-router-dom';
import AdminSetupPage from './components/member/AdminSetupPage';
import SignInPage from './pages/auth/SignInPage';
import HomePage from './pages/HomePage';

export interface LoginInput {
  userId: string;
  password: string;
}

export interface AuthInfo {
  auth: string;
}

export interface MyInfo {
  userName: string;
  authList: AuthInfo[];
}

export interface CodeGroup {
  groupCode: string;
  groupName: string;
  regDate: string;
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
