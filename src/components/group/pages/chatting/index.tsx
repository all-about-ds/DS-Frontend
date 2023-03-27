import GroupPageHeader from 'components/group/ui/groupPageHeader';
import * as S from './style';
import * as I from '../../../../assets/svg';
import { useEffect, useRef, useState } from 'react';
import SockJs from 'sockjs-client';
import * as StompJs from 'stompjs';
import tokenService from 'utils/tokenService';

function GroupChatting() {
  const [chattings, setChattings] = useState([]);
  const [participants, setParticipants] = useState({});
  const scrollRef = useRef<HTMLDivElement>(null);
  const client = useRef<any>();

  const connectHandler = () => {
    try {
      //client.current.active();
      client.current.connect(
        { Authorization: 'Bearer ' + tokenService.getLocalAccessToken() },
        () => {
          client.current.subscribe(
            `주소`,
            (message: any) => {
              setChattings(message.body);
            },
            { Authorization: 'Bearer ' + tokenService.getLocalAccessToken() }
          );
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const disconnect = () => {
    try {
      client.current.disconnect(
        () => {
          client.current.unsubscribe('sub-0');
        },
        { Authorization: 'Bearer ' + tokenService.getLocalAccessToken() }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    scrollRef.current!.scrollTop = scrollRef.current!.scrollHeight;
    const socket = new SockJs('STOMP 서버가 구현되어 있는 URL');
    client.current = StompJs.over(socket);

    connectHandler();

    return () => disconnect();
  }, []);

  return (
    <>
      <S.GroupChattingLayout>
        <S.ChattingLayout>
          <GroupPageHeader />
          <S.ChattingWrapper ref={scrollRef}>
            <S.MemberWrapper>
              <S.MemberBox>
                <S.MemberProfile image='' />
                <S.MemberName>1</S.MemberName>
              </S.MemberBox>
              <S.ChattingBox>
                <S.Chatting>
                  <S.ChattingText>
                    애국가(愛國歌)는 ‘나라를 사랑하는 노래’라는 뜻이에요.
                  </S.ChattingText>
                </S.Chatting>
                <S.Time>오후 1:30</S.Time>
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
                <S.MemberName>1</S.MemberName>
              </S.MemberBox>
              <S.ChattingBox>
                <S.Chatting>
                  <S.ChattingText>
                    애국가(愛國歌)는 ‘나라를 사랑하는 노래’라는 뜻이에요.
                  </S.ChattingText>
                </S.Chatting>
                <S.Time>오후 1:30</S.Time>
              </S.ChattingBox>
            </S.MemberWrapper>

            <S.MemberWrapper>
              <S.MemberBox>
                <S.MemberProfile image='' />
                <S.MemberName>1</S.MemberName>
              </S.MemberBox>
              <S.ChattingBox>
                <S.Chatting>
                  <S.ChattingText>
                    애국가(愛國歌)는 ‘나라를 사랑하는 노래’라는 뜻이에요.
                  </S.ChattingText>
                </S.Chatting>
                <S.Time>오후 1:30</S.Time>
              </S.ChattingBox>
            </S.MemberWrapper>

            <S.MemberWrapper>
              <S.MemberBox>
                <S.MemberProfile image='' />
                <S.MemberName>1</S.MemberName>
              </S.MemberBox>
              <S.ChattingBox>
                <S.Chatting>
                  <S.ChattingText>
                    애국가(愛國歌)는 ‘나라를 사랑하는 노래’라는 뜻이에요.
                  </S.ChattingText>
                </S.Chatting>
                <S.Time>오후 1:30</S.Time>
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
