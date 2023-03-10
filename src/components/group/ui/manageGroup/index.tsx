import { Input } from 'components/auth/ui/input/style';
import React, { useState } from 'react';
import { ManageGroupType } from 'types/group.type';
import * as S from './style';
import * as I from '../../../../assets/svg';

function ManageGroup({ groupType }: { groupType: ManageGroupType }) {
  const [memberNum, setMemberNum] = useState<number>(1);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const memberUp = () => {
    if (memberNum !== 7) {
      setMemberNum(memberNum + 1);
    }
  };

  const memberDown = () => {
    if (memberNum !== 1) {
      setMemberNum(memberNum - 1);
    }
  };

  const changePrivatePublic = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <S.Layout>
        <S.TopText>DS</S.TopText>
        <S.TitleText>
          그룹
          <>{groupType === 'create' && ' 만들기'}</>
          <>{groupType === 'edit' && ' 수정하기'}</>
        </S.TitleText>
        <S.ElementsWrapper>
          <S.BoldText>그룹 이름</S.BoldText>
          <Input placeholder='그룹 이름을 입력해주세요.'></Input>

          <S.BoldText style={{ marginTop: '1.5rem' }}>그룹 설명</S.BoldText>
          <S.Input placeholder='어떤 그룹인지 설명해주세요.'></S.Input>

          <S.BoldText style={{ marginTop: '2.5rem' }}>배너 사진</S.BoldText>
          <S.ImageBox>
            <S.ImageArea>
              <S.SmallBox>
                <I.Photo />
              </S.SmallBox>
              <S.ImageText>이미지 업로드</S.ImageText>
            </S.ImageArea>
          </S.ImageBox>

          <S.BoldText style={{ marginTop: '2.5rem' }}>인원</S.BoldText>
          <S.MemberBox>
            <S.MemberTextWrapper>
              <S.Member>{memberNum}</S.Member>
              <S.Member>명</S.Member>
            </S.MemberTextWrapper>

            <S.ButtonBox>
              <S.Button onClick={memberUp}>
                <I.ArrowUp />
              </S.Button>
              <S.Button onClick={memberDown}>
                <I.ArrowDown />
              </S.Button>
            </S.ButtonBox>
          </S.MemberBox>

          <S.BoldText style={{ marginTop: '1.5rem' }}>공개 여부</S.BoldText>
          <S.RadiusButtonBox>
            <S.LeftRadiusButton
              onClick={changePrivatePublic}
              style={isClicked ? { backgroundColor: '#7848DE' } : {}}
            >
              <S.TextInButton style={isClicked ? { color: '#FFFFFF' } : {}}>
                비공개
              </S.TextInButton>
            </S.LeftRadiusButton>
            <S.RightRadiusButton
              onClick={changePrivatePublic}
              style={!isClicked ? { backgroundColor: '#7848DE' } : {}}
            >
              <S.TextInButton style={!isClicked ? { color: '#FFFFFF' } : {}}>
                공개
              </S.TextInButton>
            </S.RightRadiusButton>
          </S.RadiusButtonBox>

          {isClicked && (
            <>
              <S.BoldText style={{ marginTop: '24px' }}>비밀번호</S.BoldText>
              <Input placeholder='비밀번호를 입력해주세요' />
            </>
          )}

          <S.SubmithButtonBox>
            <S.CancelButton>취소</S.CancelButton>
            <S.SubmitButton>완료</S.SubmitButton>
          </S.SubmithButtonBox>
        </S.ElementsWrapper>
      </S.Layout>
    </>
  );
}

export default ManageGroup;
