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
  EditGroupPage,
  GroupInformationPage,
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
        <Route path='/group/edit' element={<EditGroupPage />} />
        <Route path='/group/member' element={<MemberSettingPage />} />
        <Route path='/group/information'element={<GroupInformationPage/>}
      </Routes>
    </RecoilRoot>
  );
}

export default App;
