import { groupPasswordModalAtom } from 'atoms/container';
import ModalLayout from 'components/common/layout/modal';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import * as S from './style';

interface PasswordProps {
  index: number | undefined;
}

function PasswordModal(props: PasswordProps) {
  const [, setGroupPasswordModal] = useRecoilState(groupPasswordModalAtom);
  const navigate = useNavigate();
  const [isError, setError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<{ password: string }>();

  const onValid = async () => {
    try {
      setError(false);

      // api
    } catch (e: any) {
      console.log(e);
    }
  };

  const inValid = (error: any) => {
    setError(true);
    console.log(error);
  };

  const cancel = () => {
    setGroupPasswordModal(false);
  };

  return (
    <>
      <ModalLayout setModal={setGroupPasswordModal}>
        <S.PasswordBox onClick={(e) => e.stopPropagation()}>
          <S.Title>비밀번호</S.Title>
          <S.Description>
            비공개 설정이 걸려있는 그룹입니다, 가입하실려면 비밀번호를
            입력해주세요.
          </S.Description>
          <form onSubmit={handleSubmit(onValid, inValid)}>
            <S.InputBox
              isError={isError}
              placeholder='비밀번호를 입력해주세요.'
              type='password'
              {...register('password', {
                required: '비밀번호는 필수입력입니다.',
                minLength: {
                  value: 4,
                  message: '숫자 4자리의 비밀번호를 입력해주세요.',
                },
                maxLength: {
                  value: 4,
                  message: '숫자 4자리의 비밀번호를 입력해주세요.',
                },
              })}
            />
            <S.ButtonBox>
              <S.CancelButton onClick={cancel}>취소</S.CancelButton>
              <S.SubtmitButton disabled={isSubmitting}>완료</S.SubtmitButton>
            </S.ButtonBox>
          </form>
        </S.PasswordBox>
      </ModalLayout>
    </>
  );
}

export default PasswordModal;
