import group from 'api/group';
import { groupPasswordModalAtom, userInfoAtomFamily } from 'atoms/container';
import ModalLayout from 'components/common/layout/modal';
import { ref, set } from '@firebase/database';
import { db } from '../../../../firebase';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import * as S from './style';

interface PasswordProps {
  index: number | undefined;
  groupName: string | undefined;
}

function PasswordModal(props: PasswordProps) {
  const [, setGroupPasswordModal] = useRecoilState(groupPasswordModalAtom);
  const [userName] = useRecoilState(userInfoAtomFamily('name'));
  const navigate = useNavigate();
  const [isError, setError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<{ password: string }>();

  const onValid = async (data: { password: string | undefined }) => {
    try {
      setError(false);
      await group.joinGroup(data.password, props.index);

      await set(ref(db, `timers/${props.groupName}/users/${userName}`), {
        name: userName,
        time: 0,
        active: false,
      });

      navigate(`/group/${props.index}/information`);
    } catch (e: any) {
      if (e.response.status === 400) {
        toast.error('비밀번호가 일치하지 않았어요!');
      } else if (e.response.status === 404) {
        toast.error('존재하지 않는 그룹이에요');
      } else if (e.response.status === 409) {
        toast.error('이미 가입된 그룹이에요!');
      }
    }
  };

  const inValid = (error: any) => {
    setError(true);
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
