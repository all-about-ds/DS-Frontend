import GroupPageHeader from 'components/group/ui/groupPageHeader';
import * as S from './style';
import * as I from '../../../../assets/svg';

function GroupChatting() {
  return (
    <>
      <S.GroupChattingLayout>
        <S.ChattingLayout>
          <GroupPageHeader />
          <S.ChattingWrapper>
            <S.MemberWrapper>
              <S.MemberBox>
                <S.MemberProfile image='' />
                <S.MemberName>오종진</S.MemberName>
              </S.MemberBox>
              <S.ChattingBox>
                <S.Chatting>
                  <S.ChattingText>
                    애국가(愛國歌)는 ‘나라를 사랑하는 노래’라는 뜻이에요.
                  </S.ChattingText>
                </S.Chatting>
                <S.Time>오후 1:34</S.Time>
              </S.ChattingBox>
            </S.MemberWrapper>

            <S.MyChatBox>
              <S.MyChatting>
                <S.MyChatText>
                  행정안전부는 여러분과 여러분의 가족, 친구들이 더 행복하게
                  생활할 수 있도록 국민의 안전을 책임지고, 전국을 골고루 함께 잘
                  살게 만드는 일을 하는 곳입니다.행정안전부는 대한민국의 희
                </S.MyChatText>
              </S.MyChatting>
              <S.MyChatTime>오후 3:10</S.MyChatTime>
            </S.MyChatBox>

            <S.MemberWrapper>
              <S.MemberBox>
                <S.MemberProfile image='' />
                <S.MemberName>오종진</S.MemberName>
              </S.MemberBox>
              <S.ChattingBox>
                <S.Chatting>
                  <S.ChattingText>
                    애국가(愛國歌)는 ‘나라를 사랑하는 노래’라는 뜻이에요.
                  </S.ChattingText>
                </S.Chatting>
                <S.Time>오후 1:34</S.Time>
              </S.ChattingBox>
            </S.MemberWrapper>

            <S.MemberWrapper>
              <S.MemberBox>
                <S.MemberProfile image='' />
                <S.MemberName>오종진</S.MemberName>
              </S.MemberBox>
              <S.ChattingBox>
                <S.Chatting>
                  <S.ChattingText>
                    애국가(愛國歌)는 ‘나라를 사랑하는 노래’라는 뜻이에요.
                  </S.ChattingText>
                </S.Chatting>
                <S.Time>오후 1:34</S.Time>
              </S.ChattingBox>
            </S.MemberWrapper>
          </S.ChattingWrapper>

          <S.InputBox>
            <S.InputInnerBox>
              <I.LongRectengle />
              <S.Input></S.Input>
              <div style={{ cursor: 'pointer' }}>
                <I.SubmitArrow />
              </div>
            </S.InputInnerBox>
          </S.InputBox>
        </S.ChattingLayout>
      </S.GroupChattingLayout>
    </>
  );
}

export default GroupChatting;
