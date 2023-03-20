import React from 'react';
import * as S from './style';
import * as I from 'assets/svg';
import { SetterOrUpdater, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { authEmailAtomFamily, currentSectionsAtomFamily } from 'atoms';
import auth from 'api/auth';

interface AuthFrameProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title: string;
  progressBarValue?: number;
  setSection?: SetterOrUpdater<number>;
  atomKey?: 'signup' | 'findPassword';
}

function AuthFrame(props: AuthFrameProps) {
  const navigate = useNavigate();
  const authEmail = useRecoilValue(authEmailAtomFamily(props.atomKey));
  const section = useRecoilValue(currentSectionsAtomFamily(props.atomKey));

  const onBackIconClick = async () => {
    if (section === 3) {
      switch (props.atomKey) {
        case 'signup': {
          await auth.sendSignupAuthenticationNumber(authEmail);
          break;
        }
        case 'findPassword': {
          await auth.sendFindPasswordAuthenticationNumber(authEmail);
          break;
        }
      }
    }

    props.setSection?.((oldValue: number) => {
      if (oldValue === 1) {
        return 1;
      } else {
        return oldValue - 1;
      }
    });
  };

  const onExitIconClick = () => {
    navigate('/');
  };

  return (
    <S.AuthFrame>
      {props.title === '로그인' && <S.LoginText>{props.title}</S.LoginText>}
      {props.title !== '로그인' && (
        <S.TopBox>
          <div onClick={onBackIconClick}>
            <I.AuthGoBackIcon />
          </div>
          <S.AuthText>{props.title}</S.AuthText>
          <div onClick={onExitIconClick}>
            <I.AuthExitIcon />
          </div>
        </S.TopBox>
      )}
      {props.progressBarValue ? (
        <S.ProgressBar id='progress' value={props.progressBarValue} max='100' />
      ) : (
        <></>
      )}
      {props.children}
    </S.AuthFrame>
  );
}

export default AuthFrame;
