import styled from '@emotion/styled';

export const MyPageLayout = styled.section`
  width: 66.25vw;
  margin: auto;

  @media screen and (max-width: 926px) {
    width: 93vw;
  }
`;

export const ProfileSection = styled.section`
  width: 100%;
  margin-top: 4.5rem;
`;

export const NameBox = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 926px) {
    svg {
      display: none;
    }
  }
`;

export const Name = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  color: #ffffff;

  @media screen and (max-width: 900px) {
    font-size: 40px;
  }
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

  & > svg {
    width: 120px;
    height: 120px;
  }
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 120px;
`;

export const UpdateBox = styled.div<{ loaded: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0.5rem;
  pointer-events: ${(e) => !e.loaded && 'none'};

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #ffffff;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media screen and (max-width: 1832px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1379px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
