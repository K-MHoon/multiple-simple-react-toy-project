import { Route, Routes } from 'react-router-dom';
import AdminSetupPage from './components/member/AdminSetupPage';
import SignInPage from './pages/auth/SignInPage';
import CodeGroupListPage from './pages/codegroup/CodeGroupListPage';
import CodeGroupModifyPage from './pages/codegroup/CodeGroupModifyPage';
import CodeGroupReadPage from './pages/codegroup/CodeGroupReadPage';
import CodeGroupRegisterPage from './pages/codegroup/CodeGroupRegisterPage';
import CodeDetailListPage from './pages/codedetail/CodeDetailListPage';
import CodeDetailModifyPage from './pages/codedetail/CodeDetailModifyPage';
import CodeDetailReadPage from './pages/codedetail/CodeDetailReadPage';
import CodeDetailRegisterPage from './pages/codedetail/CodeDetailRegisterPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/auth/SignUpPage';

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

export interface CodeDetail {
  groupCode: string;
  codeValue: string;
  codeName: string;
  sortSeq: number;
  regDate: string;
}

export interface CodeDetailKey {
  groupCode: string;
  codeValue: string;
}

export interface CodeValue {
  label: string;
  value: string;
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

      <Route path="/codedetail" element={<CodeDetailListPage />} />
      <Route path="/codedetail/create" element={<CodeDetailRegisterPage />} />
      <Route
        path="/codedetail/edit/:groupCode/:codeValue"
        element={<CodeDetailModifyPage />}
      />
      <Route
        path="/codedetail/read/:groupCode/:codeValue"
        element={<CodeDetailReadPage />}
      />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default App;
