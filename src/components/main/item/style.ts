import styled from '@emotion/styled/macro';

export const Description = styled.div`
  font-family: AppleSDGothicNeoM00;
  font-weight: 400;
  font-size: 14px;
  color: #717171;
  width: 100%;
  height: 28px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-bottom: 0.5rem;
`;

export const GroupBox = styled.div`
  width: 100%;
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

export const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 12px;
  object-fit: cover;

  @media screen and (max-width: 1883px) {
    height: 320px;
  }

  @media screen and (max-width: 1110px) {
    height: 300px;
  }

  @media screen and (max-width: 645px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MaxPeople = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 10px;
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
`;

export const User = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
`;

export const Profile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 8px;
  object-fit: cover;
`;

export const UserName = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 3px;
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
