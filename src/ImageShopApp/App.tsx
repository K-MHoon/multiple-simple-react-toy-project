import { Route, Routes } from 'react-router-dom';
import AdminSetupPage from './components/member/AdminSetupPage';
import SignInPage from './pages/auth/SignInPage';
import CodeGroupListPage from './pages/codegroup/CodeGroupListPage';
import CodeGroupModifyPage from './pages/codegroup/CodeGroupModifyPage';
import CodeGroupReadPage from './pages/codegroup/CodeGroupReadPage';
import CodeGroupRegisterPage from './pages/codegroup/CodeGroupRegisterPage';
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
      <Route path="/codegroup" element={<CodeGroupListPage />} />
      <Route path="/codegroup/create" element={<CodeGroupRegisterPage />} />
      <Route
        path="/codegroup/edit/:groupCode"
        element={<CodeGroupModifyPage />}
      />
      <Route
        path="/codegroup/read/:groupCode"
        element={<CodeGroupReadPage />}
      />
    </Routes>
  );
};

export default App;
