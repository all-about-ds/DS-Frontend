import styled from '@emotion/styled';

export const Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 25px;
`;

export const SignupButton = styled.button`
  width: 16.5vw;
  min-width: 284px;
  margin: 11rem auto 0;
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
