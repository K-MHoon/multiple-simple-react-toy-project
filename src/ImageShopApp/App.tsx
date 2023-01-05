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
import MemberReadPage from './pages/member/MemberReadPage';
import MemberModifyPage from './pages/member/MemberModifyPage';
import MemberRegisterPage from './pages/member/MemberRegisterPage';
import MemberListPage from './pages/member/MemberListPage';

export interface LoginInput {
  userId: string;
  password: string;
}

export interface AuthInfo {
  auth: string;
}

export interface MyInfo {
  userId: string;
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

export interface Member {
  userNo: string;
  userId: string;
  userPw: string;
  userName: string;
  job: string;
  authList: AuthInfo[];
  regDate: string;
}

export interface UserAuth {
  userNo: string;
  auth: string;
}

export interface UserObject {
  userId: string;
  userPw: string;
  userName: string;
  job: string;
  authList: UserAuth[];
}

export interface Board {
  boardNo: string;
  title: string;
  writer: string;
  content: string;
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

      <Route path="/member" element={<MemberListPage />} />
      <Route path="/member/create" element={<MemberRegisterPage />} />
      <Route path="/member/edit/:userNo" element={<MemberModifyPage />} />
      <Route path="/member/read/:userNo" element={<MemberReadPage />} />
    </Routes>
  );
};

export default App;
