import styled from '@emotion/styled';

export const GroupInformationPageLayout = styled.section`
  width: 35.4vw;
  margin: auto;
`;

export const GroupImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const TitleBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  & > svg {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: #f1f1f1;
`;

export const Description = styled.article`
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.35);
  margin-top: 1.25rem;
  line-height: 20px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1px;
  margin: 2.5rem 0 1.25rem;
`;

export const TextMembersBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const TextMembers = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #f1f1f1;
`;

export const MemberList = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8.5px 8.5px;
`;

export const Memeber = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  object-fit: cover;
  cursor: pointer;
`;

export const RemoveGroupButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #ee3939;
  color: #232323;
  margin-top: 2rem;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
`;
