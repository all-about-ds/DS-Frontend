import styled from '@emotion/styled';

export const MyPageModal = styled.div`
  position: relative;
  width: 22vw;
  max-width: 400px;
  min-width: 360px;
  height: 32vh;
  background: #232323;
  padding: 28px 24px;
  border-radius: 10px;
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div > svg {
    cursor: pointer;
  }

  h1 {
    margin-left: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: #ffffff;
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  width: 66px;
  height: 37px;
  background: #7848de;
  border-radius: 10px;
  outline: none;
  border: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  color: #ffffff;
`;
