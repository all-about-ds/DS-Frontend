import styled from '@emotion/styled';

export const SortButtonWrapper = styled.div`
  width: 85px;
  height: 21px;
  display: flex;
  justify-content: space-between;
  //margin-left: 24px;
`;
export const SortButton = styled.div<{ byPopularity: boolean }>`
  font-weight: 400;
  font-size: 15px;
  color: ${(props) =>
    props.byPopularity ? '#ffffff' : 'rgba(255, 255, 255, 0.4)'};
  cursor: pointer;
`;

export const GroupBoxWrapper = styled.div`
  width: 67.5vw;
  margin-top: 27px;
  display: flex;
  flex-wrap: wrap;
`;

export const GroupBox = styled.div`
  height: 362px;
  width: 300px;
  margin-right: 24px;
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 12px;
  background-color: #ffffff;
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

export const User = styled.div`
  width: 79px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Profile = styled.div<{ image: string | undefined }>`
  background: url(${(props) => props.image});
  background: #d9d9d9;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const UserName = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
`;
