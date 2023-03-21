import { modalAtomFamily } from 'atoms';
import ModalLayout from 'components/common/layout/modal';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import * as S from './style';
import * as I from 'assets/svg';

interface MyPageModalLayoutProps {
  title: string;
  atomKey: string;
  onClick: () => void;
  children: React.ReactNode;
}

function MyPageModalLayout(props: MyPageModalLayoutProps) {
  const setModal = useSetRecoilState(modalAtomFamily(props.atomKey));

  return (
    <ModalLayout setModal={setModal}>
      <S.MyPageModal onClick={(e) => e.stopPropagation()}>
        <S.TopBar>
          <div />
          <h1>{props.title}</h1>
          <div onClick={() => setModal(false)}>
            <I.AuthExitIcon />
          </div>
        </S.TopBar>
        {props.children}
        <S.SubmitButton onClick={props.onClick}>완료</S.SubmitButton>
      </S.MyPageModal>
    </ModalLayout>
  );
}

export default MyPageModalLayout;
