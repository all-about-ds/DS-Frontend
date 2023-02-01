import GlobalStyle from 'shared/style';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { FindPasswordPage, MainPage, SigninPage, SignupPage } from 'pages';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/findPassword' element={<FindPasswordPage />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
