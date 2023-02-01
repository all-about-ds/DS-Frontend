import AuthButton from 'components/auth/button';
import * as S from './style';

function FindPasswordThirdSection() {
  return (
    <S.ThirdSectionLayout>
      <S.Text>새로 사용하실 비밀번호를 입력해주세요</S.Text>
      <S.InputWrapper>
        <S.InputTitle>새 비밀번호</S.InputTitle>
        <S.Input placeholder='비밀번호를 입력해주세요' type='text' />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputTitle>비밀번호 재확인</S.InputTitle>
        <S.Input placeholder='비밀번호를 다시 한번 입력해주세요' type='text' />
      </S.InputWrapper>
      <S.Div>
        <AuthButton>완료</AuthButton>
      </S.Div>
    </S.ThirdSectionLayout>
  );
}

export default FindPasswordThirdSection;
