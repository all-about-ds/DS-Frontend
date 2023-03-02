import * as S from './style';

interface AuthInputProps extends React.HTMLAttributes<HTMLInputElement> {
  title: string;
  margin: {
    need: boolean;
    value: string;
  };
}

function AuthInput(props: AuthInputProps) {
  const { ...rest } = props;
  return (
    <S.InputWrapper style={{ margin: props.margin.value }}>
      <S.InputTitle>{props.title}</S.InputTitle>
      <S.Input {...rest} />
    </S.InputWrapper>
  );
}

export default AuthInput;
