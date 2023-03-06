import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

export const HeaderContentBox = styled.div`
  width: 210px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserProfile = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #d9d9d9;
`;

export const UserName = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
`;

export const SearchBar = styled.div`
  width: 31.25vw;
  height: 40px;
  display: flex;
  align-items: center;
  background: #2f3031;
  border-radius: 10px;
  animation-duration: 0.25s; //진행시간
  animation-timing-function: ease-out; //처음엔 빨리나타다가 서서히 느려진다.
  animation-name: ${fadeIn}; //사용되는 트랜지션 효과이름
  animation-fill-mode: forwards; //트랜지션효과가 나타난 이후 그대로 유지한다.
`;

export const SearchArea = styled.input`
  border: none;
  background: #2f3031;
  height: 30px;
  width: 25vw;
  font-size: 15px;
  margin-left: 10px;
  color: rgba(255, 255, 255, 0.9);

  ::placeholder {
    color: rgba(255, 255, 255, 0.3);
    font-size: 15px;
  }
`;
