import styled from '@emotion/styled/macro';

export const Description = styled.div`
  font-family: 'AppleSDGothicNeoM00';
  font-weight: 400;
  font-size: 14px;
  color: #717171;
  width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-bottom: 14px;
`;

export const GroupBox = styled.div`
  height: 362px;
  width: 300px;
  margin-right: 24px;
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    transform: translateY(-20px);
    transition-duration: 0.5s;
  }

  &:hover ${Description} {
    color: #b2b2b2;
  }
`;

export const Image = styled.div<{ image: string }>`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 12px;
  background: url(${(props) => props.image});
  background-color: #ffffff;
  position: relative;
`;

export const MaxPeople = styled.div`
  font-weight: 400;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 10px;
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
`;

export const User = styled.div`
  width: 79px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const UserName = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
`;

export const LockBox = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(132, 132, 132, 0.2);
  backdrop-filter: blur(3px);
  border-radius: 50%;
  position: absolute;
  top: 16px;
  left: 16px;
`;
