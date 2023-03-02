import * as S from './style';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  dummy?: boolean;
}

function AuthButton({ children, ...rest }: Props) {
  return <S.AuthButton {...rest}>{children}</S.AuthButton>;
}

export default AuthButton;
