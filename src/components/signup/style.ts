import styled from '@emotion/styled';

export const SignupPageLayout = styled.section``;

export const SignupBox = styled.div`
  width: 400px;
  height: 51vh;
  min-height: 550px;
  background: #161616;
  border-radius: 10px;
  padding: 35px 0;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 25px;
`;

export const ProgressBar = styled.progress`
  width: 100%;
  height: 2px;
  appearance: none;

  ::-webkit-progress-bar {
    background: #333333;
  }

  ::-webkit-progress-value {
    background: #7139ea;
    transition: width 0.5s;
  }
  margin-bottom: 36px;
`;

export const InputWrapper = styled.div`
  width: 90%;
  margin: 24px auto 0;
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

export const SignupButton = styled.button`
  width: 90%;
  margin: 12rem auto 0;
  outline: none;
  display: block;
  border: none;
  cursor: pointer;
  height: 40px;
  background: #7848de;
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  transition: 0.2s;

  :hover {
    box-sizing: border-box;
    border: 1px solid #7848de;
    color: #7848de;
    background: #161616;
  }
`;

export const GoLoginBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  gap: 5px;
  margin-top: 1rem;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #c2c2c2;
  }
`;
