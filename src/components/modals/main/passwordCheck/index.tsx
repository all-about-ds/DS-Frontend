import * as S from './style';

function PasswordModal() {
  return (
    <>
      <S.PasswordBox>
        <S.Title>비밀번호</S.Title>
        <S.Description>
          비공개 설정이 걸려있는 그룹입니다, 가입하실려면 비밀번호를
          입력해주세요.
        </S.Description>
      </S.PasswordBox>
    </>
  );
}

export default PasswordModal;
