import GroupPageHeader from 'components/group/ui/groupPageHeader';
import * as S from './style';
import * as I from '../../../../assets/svg';
import { useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import * as StompJS from '@stomp/stompjs';
import tokenService from 'utils/tokenService';

function GroupChatting() {
  const [userChat, setUserChat] = useState<string>('');
  const [chattings, setChattings] = useState<never[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const client = useRef<any>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserChat(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      send();
    }
  };

  const connectHandler = () => {
    try {
      client.current = new StompJS.Client({
        brokerURL: 'ws://localhost:3000/stomp/chat',
        connectHeaders: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
        onConnect: () => {
          subscribe();
        },
      });

      client.current.activate();
    } catch (error) {
      console.log(error);
    }
  };

  const subscribe = () => {
    client.current.subscribe('/sub', (message: any) => {
      const json_chatting = JSON.parse(message.body);
      setChattings((prev) => ({ ...prev, json_chatting }));
    });
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  const send = () => {
    if (!client.current.connected) return;

    client.current.send({
      destination: '/pub',
      body: JSON.stringify({
        applyId: '',
        chat: userChat,
      }),
    });

    setUserChat('');
  };

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;

    connectHandler();

    return () => disconnect();
  }, []);

  return (
    <>
      <S.GroupChattingLayout>
        <S.ChattingLayout>
          <GroupPageHeader title='채팅방' />
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
              <S.Input
                onChange={onChange}
                onKeyDown={handleKeyPress}
                value={userChat}
              ></S.Input>
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
