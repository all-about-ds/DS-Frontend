import styled from 'styled-components';

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

export const UserBox = styled.div`
  width: 230px;
  height: 36px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const UserProfile = styled.div<{ image: string | undefined }>`
  background: url(${(props) => props.image});
  background: #d9d9d9;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const UserName = styled.div`
  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #969696;
  margin-left: 12px;
  margin-right: 142px;
`;

export const SettingBox = styled.div`
  position: relative;
`;
