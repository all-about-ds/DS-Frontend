import { findPasswordCurrentSectionAtom } from 'atoms';
import Header from 'components/common/header';
import CenterAlignmentLayout from 'components/common/layout/align/center';
import AuthFrame from 'components/frame/auth';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import FindPasswordSectionContainer from '../container';

function FindPassword() {
  const [findPasswordCurrentSection, setFindPasswordCurrentSection] =
    useRecoilState(findPasswordCurrentSectionAtom);

  const [progress, setProgress] = useState<number>(33);

  useEffect(() => {
    switch (findPasswordCurrentSection) {
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
  }, [findPasswordCurrentSection]);

  return (
    <>
      <Header />
      <CenterAlignmentLayout>
        <AuthFrame
          title='비밀번호 찾기'
          progressBarValue={progress}
          setSection={setFindPasswordCurrentSection}
        >
          <FindPasswordSectionContainer />
        </AuthFrame>
      </CenterAlignmentLayout>
    </>
  );
}

export default FindPassword;
