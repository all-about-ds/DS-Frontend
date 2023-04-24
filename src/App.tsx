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
  GroupTimerPage,
  GroupChattingPage,
} from 'pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <RecoilRoot>
      <ToastContainer
        position='top-right'
        closeButton={false}
        autoClose={600}
      />
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth/signin' element={<SigninPage />} />
        <Route path='/auth/signup' element={<SignupPage />} />
        <Route path='/auth/findPassword' element={<FindPasswordPage />} />
        <Route path='/my' element={<MyPage />} />
        <Route path='/group/create' element={<CreateGroupPage />} />
        <Route path='/group/edit' element={<EditGroupPage />} />
        <Route path='/group/:groupId/member' element={<MemberSettingPage />} />
        <Route
          path='/group/:groupId/chatting'
          element={<GroupChattingPage />}
        />
        <Route path='/group/:groupId/timer' element={<GroupTimerPage />} />
        <Route
          path='/group/:groupId/information'
          element={<GroupInformationPage />}
        />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
