import styled from '@emotion/styled';

export const GroupChattingLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ChattingLayout = styled.div`
  width: 66.25vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(62, 62, 62, 0) -22.54%,
    rgba(49, 49, 49, 0.28) 100%
  );
  position: relative;
`;

export const ChattingWrapper = styled.div`
  width: 60vw;
  height: 85.93vh;
`;

export const InputBox = styled.div`
  width: 66.25vw;
  height: 80px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #101010;
`;

export const InputInnerBox = styled.div`
  width: 45.1vw;
  height: 44px;
  background: #232323;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px 0 20px;
`;

export const Input = styled.input`
  padding: 0;
  border: none;
  background: #232323;
  width: 42.6vw;
  margin-left: 10px;
  margin-right: 14px;
  height: 20px;
  font-family: 'AppleSDGothicNeoM00';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.8);
`;

export const MemberWrapper = styled.div`
  display: flex;
  width: auto;
  margin-top: 10.19vh;
`;

export const MemberBox = styled.div`
  width: 44px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MemberProfile = styled.div<{ image: string | undefined }>`
  width: 44px;
  height: 44px;
  background: url(${(props) => props.image});
  background: #d9d9d9;
  border-radius: 50%;
`;

export const MemberName = styled.div`
  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #969696;
`;

export const ChattingBox = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Chatting = styled.div`
  max-width: 652px;
  height: auto;
  display: flex;
  align-items: center;
  border-radius: 0 10px 10px 10px;
  padding: 16px 24px;
  background: #323334;
`;

export const ChattingText = styled.p`
  font-family: 'AppleSDGothicNeoM00';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.8);
`;

export const Time = styled.p`
  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #6a6a6a;
  margin-top: 10px;
  margin-left: 12px;
`;
