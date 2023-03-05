import GlobalStyle from 'shared/style';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import {
  FindPasswordPage,
  MainPage,
  MyPage,
  SigninPage,
  SignupPage,
  CreateGroupPage,
  MemberSettingPage,
} from 'pages';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth/signin' element={<SigninPage />} />
        <Route path='/auth/signup' element={<SignupPage />} />
        <Route path='/auth/findPassword' element={<FindPasswordPage />} />
        <Route path='/my' element={<MyPage />} />
        <Route path='/group/create' element={<CreateGroupPage />} />
        <Route path='/group/member' element={<MemberSettingPage />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
