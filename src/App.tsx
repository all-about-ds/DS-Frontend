import GlobalStyle from 'shared/style';
import SigninPage from 'pages/SigninPage';
import { Route, Routes } from 'react-router-dom';
import SignupPage from 'components/signup/page';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Routes>
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
