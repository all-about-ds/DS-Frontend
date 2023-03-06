import styled from 'styled-components';

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

export const ManageButtonBox = styled.div`
  position: absolute;
  width: 134px;
  height: 98px;
  right: -150px;
  top: -10px;
  display: flex;
  flex-direction: column;
  background: rgba(14, 14, 14, 0.5);
  backdrop-filter: blur(2px);
  border-radius: 10px;
`;

export const NameBox = styled.div`
  width: 134px;
  border-radius: 50% 50% 0 0;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
`;

export const Line = styled.div`
  width: 134px;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
`;

export const Expel = styled.div`
  width: 134px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'AppleSDGothicNeoM00';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #d04040;
  line-height: 17px;
  cursor: pointer;
`;

export const HandOver = styled.div`
  width: 134px;
  border-radius: 0 0 50% 50%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'AppleSDGothicNeoM00';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #7848de;
`;
