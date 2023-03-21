import { modalAtomFamily } from 'atoms';
import ModalLayout from 'components/common/layout/modal';
import React from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';
import * as I from 'assets/svg';

interface MyPageModalLayoutProps {
  title: string;
  atomKey: string;
  children: React.ReactNode;
}

function MyPageModalLayout(props: MyPageModalLayoutProps) {
  const [, setModal] = useRecoilState(modalAtomFamily(props.atomKey));

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
      </S.MyPageModal>
    </ModalLayout>
  );
}

export default MyPageModalLayout;
