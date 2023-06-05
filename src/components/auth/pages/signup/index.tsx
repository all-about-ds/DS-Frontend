import { authEmailAtomFamily, currentSectionsAtomFamily } from 'atoms';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';
import { useNavigate } from 'react-router';
import AuthSectionContainer from 'components/auth/ui/layout/container';
import AuthForm from 'components/auth/ui/layout/form';

function Signup() {
  const [currentSection, setCurrentSecion] = useRecoilState(
    currentSectionsAtomFamily('signup')
  );
  const [, setEmail] = useRecoilState(authEmailAtomFamily('signup'));
  const navigate = useNavigate();

  const [progress, setProgress] = useState<number>(33);

  useEffect(() => {
    switch (currentSection) {
      case 1:
        setProgress(33);
        break;
      case 2:
        setProgress(66);
        break;
      case 3:
        setProgress(100);
        break;
    }
  }, [currentSection]);

  const onLogin = () => {
    setEmail('');
    setCurrentSecion(1);
    navigate('/auth/signin');
  };

  return (
    <AuthForm
      title='회원가입'
      progressBarValue={progress}
      setSection={setCurrentSecion}
      atomKey={'signup'}
    >
      <AuthSectionContainer title='회원가입' atomKey='signup' />
      <S.GoLoginBox>
        <p>기존 회원이신가요?</p>
        <p style={{ color: '#7139EA', cursor: 'pointer' }} onClick={onLogin}>
          로그인
        </p>
      </S.GoLoginBox>
    </AuthForm>
  );
}

export default Signup;
