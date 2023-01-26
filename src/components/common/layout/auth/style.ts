import styled from 'styled-components';

export const AuthFrame = styled.div`
  width: 21vw;
  min-width: 372px;
  height: 55vh;
  min-height: 600px;
  background: #161616;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleText = styled.div`
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  margin-top: 25px;
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
  margin: 25px 0 38px 0;
`;
