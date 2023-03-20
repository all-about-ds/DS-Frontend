import { modalAtomFamily } from 'atoms';
import Header from 'components/common/header';
import CenterAlignmentLayout from 'components/common/layout/align/center';
import AuthFrame from 'components/frame/auth';
import AuthEmailErrorModal from 'components/modals/authException';
import { SetterOrUpdater, useRecoilState } from 'recoil';

interface AuthFormProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title: '회원가입' | '비밀번호 찾기';
  progressBarValue?: number;
  setSection?: SetterOrUpdater<number>;
  atomKey: 'signup' | 'findPassword';
}

function AuthForm(props: AuthFormProps) {
  const [authEmailErrorModal] = useRecoilState(modalAtomFamily(props.atomKey));

  return (
    <>
      {authEmailErrorModal && <AuthEmailErrorModal pageType={props.atomKey} />}
      <Header />
      <CenterAlignmentLayout>
        <AuthFrame
          title={props.title}
          progressBarValue={props.progressBarValue}
          setSection={props.setSection}
          atomKey={props.atomKey}
        >
          {props.children}
        </AuthFrame>
      </CenterAlignmentLayout>
    </>
  );
}

export default AuthForm;
