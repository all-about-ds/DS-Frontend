import user from 'api/user';
import { modalAtomFamily } from 'atoms';
import useInputs from 'hooks/useInputs';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import MyPageModalLayout from '../layout';
import * as S from './style';

interface EditNameModalProps {
  oldName: string;
}

function EditNameModal(props: EditNameModalProps) {
  const [error, setError] = useState<string>('');
  const setEditNameModal = useSetRecoilState(modalAtomFamily('editName'));
  const [{ name }, onChange] = useInputs({
    name: props.oldName,
  });

  const onChangeName = async () => {
    try {
      if (name.trim().length <= 8) {
        if (name.replace(/(\s*)/g, '').length > 0) {
          await user.changeName(name);
          setEditNameModal(false);
          window.location.reload();
        } else {
          setError('빈 칸을 정확히 채워주세요');
        }
      } else {
        setError('닉네임을 8글자가 최대에요');
      }
    } catch (error: any) {
      if (error.response.status === 404) {
        setError('이미 있는 이름이에요');
      }
    }
  };

  return (
    <MyPageModalLayout title='닉네임 변경' atomKey='editName'>
      <S.EmotikonBox>😎</S.EmotikonBox>
      <S.Description>얼마나 멋있는 이름으로 바뀔지 기대돼요!</S.Description>
      <S.Input
        name='name'
        placeholder='사용하실 닉네임을 입력해주세요'
        onChange={onChange}
        value={name}
        isError={error}
      />
      <S.ErrorText isError={error}>{error}</S.ErrorText>
      <S.SubmitButton isError={error} onClick={onChangeName}>
        확인
      </S.SubmitButton>
    </MyPageModalLayout>
  );
}

export default EditNameModal;
