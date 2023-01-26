import GlobalStyle from 'shared/style';
import SigninPage from 'pages/auth/signinPage';
import { Route, Routes } from 'react-router-dom';
import SignupPage from 'components/signup';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
