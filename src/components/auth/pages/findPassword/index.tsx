import { currentSectionsAtomFamily } from 'atoms';
import AuthSectionContainer from 'components/auth/ui/layout/container';
import AuthForm from 'components/auth/ui/layout/form';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';

function FindPassword() {
  const [currentSection, setCurrentSection] = useRecoilState(
    currentSectionsAtomFamily('findPassword')
  );

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

  return (
    <>
      <AuthForm
        title='비밀번호 찾기'
        progressBarValue={progress}
        setSection={setCurrentSection}
        atomKey={'findPassword'}
      >
        <AuthSectionContainer title='비밀번호 찾기' atomKey='findPassword' />
      </AuthForm>
    </>
  );
}

export default FindPassword;
