import * as S from './style';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  dummy?: boolean;
}

function SignupButton({ children, ...rest }: Props) {
  return <S.SignupButton {...rest}>{children}</S.SignupButton>;
}

export default SignupButton;
