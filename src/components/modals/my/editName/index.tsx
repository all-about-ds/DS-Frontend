import { useState } from 'react';
import MyPageModalLayout from '../layout';
import * as S from './style';

function EditNameModal() {
  const [error, setError] = useState<string>('');

  const onClick = () => {
    console.log('');
  };

  return (
    <MyPageModalLayout title='닉네임 변경' atomKey='editName'>
      <S.EmotikonBox>😎</S.EmotikonBox>
      <S.Description>얼마나 멋있는 이름으로 바뀔지 기대돼요!</S.Description>
      <S.Input placeholder='사용하실 닉네임을 입력해주세요' />
      <S.ErrorText isError={error}>{error}</S.ErrorText>
      <S.SubmitButton isError={error}>확인</S.SubmitButton>
    </MyPageModalLayout>
  );
}

export default EditNameModal;
