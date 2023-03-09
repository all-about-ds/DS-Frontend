import styled from '@emotion/styled';

export const SecondSectionLayout = styled.section`
  margin: 0.8rem auto -1rem;
  width: 18vw;
  min-width: 300px;
`;

export const Text = styled.p`
  font-family: 'AppleSDGothicNeoM00';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #acacac;
  text-align: center;
  margin-bottom: 3rem;
`;

export const NumberForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 10px;
  margin-bottom: 1.2rem;
`;

export const AuthenticationNumberInput = styled.input`
  height: 70px;
  border-radius: 10px;
  border: none;
  background: #232323;
  font-size: 2em;
  padding: 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);

  :focus {
    outline: none;
  }
`;

export const ResendBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  gap: 5px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #6a6a6a;
  }
  margin-bottom: 1rem;
`;

export const Timer = styled.p`
  font-family: 'AppleSDGothicNeoM00';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #efefef;
  margin-bottom: 9.6rem;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  button {
    width: 100%;
  }
`;
