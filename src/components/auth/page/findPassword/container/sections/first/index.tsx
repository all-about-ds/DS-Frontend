import AuthButton from 'components/auth/ui/button';
import * as S from './style';

function FindPasswordFirstSection() {
  return (
    <S.FirstSectionLayout>
      <S.Text>가입하신 이메일을 입력해주세요</S.Text>
      <S.InputWrapper>
        <S.InputTitle>이메일</S.InputTitle>
        <S.Input placeholder='이메일을 입력해주세요' type='text' />
      </S.InputWrapper>
      <S.Div>
        <AuthButton>완료</AuthButton>
      </S.Div>
    </S.FirstSectionLayout>
  );
}

export default FindPasswordFirstSection;
