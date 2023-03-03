import styled from '@emotion/styled';

export const MyPageLayout = styled.section`
  width: 66.25vw;
  margin: auto;
`;

export const ProfileSection = styled.section`
  width: 100%;
  margin-top: 4.5rem;
`;

export const NameBox = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Name = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  color: #ffffff;
`;

export const Description = styled.p`
  margin-top: 1rem;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.6);
`;

export const ProfileBox = styled.div`
  display: flex;
  margin-top: 3rem;
  gap: 3rem;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 120px;
`;

export const UpdateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0.5rem;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #ffffff;
  }

  svg {
    cursor: pointer;
  }
`;

export const LogoutButton = styled.button`
  background: #7848de;
  border-radius: 10px;
  width: 85px;
  height: 32px;
  outline: none;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  color: #101010;
  cursor: pointer;
`;

export const GroupSection = styled.section`
  margin-top: 4.75rem;
`;

export const GroupText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 1rem;
`;

export const GroupList = styled.div`
  margin-top: 1.5rem;
`;

export const GroupItem = styled.div`
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.81) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 10px;
  width: 300px;
  height: 200px;
  cursor: pointer;
`;

export const ItemBackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 165px;
  border-radius: 10px;
  object-fit: cover;
`;

export const Shadow = styled.div`
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.81) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 10px;
  width: 300px;
  height: 165px;
  z-index: 5;
`;

export const ItemName = styled.p`
  position: absolute;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  z-index: 10;
  margin: 1.25rem 0 0 1.25rem;
`;
