import React from 'react';
import * as S from './style';
import * as I from 'assets/svg';
import { SetterOrUpdater } from 'recoil';
import { useNavigate } from 'react-router-dom';

interface AuthFrameProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title: '회원가입' | '로그인' | '비밀번호 찾기';
  progressBarValue?: number;
  setSection?: SetterOrUpdater<number>;
}

function AuthFrame(props: AuthFrameProps) {
  const navigate = useNavigate();

  const onBackIconClick = () => {
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
      {props.title === ('회원가입' || '비밀번호 찾기') && (
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
