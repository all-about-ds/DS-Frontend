import GlobalStyle from 'shared/style';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { MainPage, SigninPage, SignupPage } from 'pages';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
