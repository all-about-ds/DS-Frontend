import Header from 'components/common/header';
import CenterAlignmentLayout from 'components/common/layout/align/center';
import * as S from './style';
import { useState } from 'react';
import User from '../ui';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MemberType } from 'types/group.type';

interface LocationType {
  list: MemberType[];
}

function MemberSetting() {
  const [isClicked, setIsClicked] = useState<any>(false);
  const location = useLocation().state as LocationType;
  const navigate = useNavigate();
  const params = useParams();

  const handleClick = (idx: any) => {
    const newArr = Array(location.list.length).fill(false);
    newArr[idx] = !isClicked[idx];
    setIsClicked(newArr);
  };

  return (
    <>
      <Header />
      <CenterAlignmentLayout>
        <S.Layout>
          <S.TopText>DS</S.TopText>
          <S.TitleText>그룹원 설정</S.TitleText>
          {location.list &&
            location.list.map((currentValue, index) => (
              <User
                key={currentValue.idx}
                handleClick={handleClick}
                elementIndex={index}
                isClicked={isClicked[index]}
                idx={currentValue.idx}
                name={currentValue.name}
                profileImg={currentValue.profileImg}
              />
            ))}
          <S.SubmithButtonBox
            onClick={() => {
              navigate('/group/' + params.groupId + '/information');
            }}
          >
            <S.SubmitButton>완료</S.SubmitButton>
          </S.SubmithButtonBox>
        </S.Layout>
      </CenterAlignmentLayout>
    </>
  );
}

export default MemberSetting;
