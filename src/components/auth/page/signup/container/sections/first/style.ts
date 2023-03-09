import styled from '@emotion/styled';

export const FirstSectionLayout = styled.form`
  margin: 2rem 0 -1rem 0;
  width: 18vw;
  min-width: 300px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  min-width: 284px;
  margin: 0 auto 24px;
`;

export const InputTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  margin-left: 8px;
  margin: 0 0 10px 8px;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background: #232323;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  padding: 13px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

  :focus {
    outline: none;
  }
`;

export const Description = styled.article`
  text-align: center;
  color: white;
  margin-top: 7rem;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
    margin: 8.5rem 0 1rem;
  }
`;

export const ErrorText = styled.p<{ isError: boolean }>`
  display: ${(e) => (e.isError ? 'block' : 'none')};
  color: #ee3939;
  font-size: 13px;
  text-align: center;
  margin-bottom: -2.2rem;
`;
