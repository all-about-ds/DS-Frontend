import SigninPage from 'pages/auth/signinPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<SigninPage />} />
      </Routes>
    </div>
  );
}

export default App;
