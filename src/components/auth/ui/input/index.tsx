import * as S from './style';

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  margin: string;
  isError?: boolean;
  register?: any;
}

function AuthInput(props: AuthInputProps) {
  const { ...rest } = props;
  return (
    <S.InputWrapper style={{ margin: props.margin }}>
      <S.InputTitle isError={props.isError}> {props.title}</S.InputTitle>
      <S.Input isError={props.isError} {...rest} {...props.register} />
    </S.InputWrapper>
  );
}

export default AuthInput;
