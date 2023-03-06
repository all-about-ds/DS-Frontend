import styled from '@emotion/styled';

export const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 290px;
  height: calc(100vh - 81px);
  background: linear-gradient(180deg, rgba(31, 31, 31, 0) 0%, #1f1f1f 100%);
`;

export const TopText = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  margin-top: 2.5rem;
  font-family: 'AppleSDGothicNeoB00';
`;

export const TitleText = styled.div`
  font-weight: 400;
  font-size: 22px;
  color: #ffffff;
  margin-top: 0.7rem;
  font-family: 'AppleSDGothicNeoEB00';
  margin-bottom: 34px;
`;

export const SubmithButtonBox = styled.div`
  width: 196px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  margin-top: 899px;
`;

export const CancelButton = styled.div`
  background: #2e2e2e;
  border-radius: 10px;
  width: 92px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'AppleSDGothicNeoSB00';
  font-style: normal;
  font-weight: 400;
  color: #818181;
  cursor: pointer;
`;

export const SubmitButton = styled.div`
  background: #7848de;
  border-radius: 10px;
  width: 92px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'AppleSDGothicNeoSB00';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;
  cursor: pointer;
`;
