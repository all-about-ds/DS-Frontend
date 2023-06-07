import GroupPageHeader from 'components/group/ui/groupPageHeader';
import * as S from './style';
import * as I from '../../../../assets/svg';
import { useEffect, useRef, useState } from 'react';
import { ChatMessageType } from 'types/chat.type';
import { Unsubscribe, off, onValue, ref, set } from '@firebase/database';
import { db } from '../../../../firebase';
import { useLocation } from 'react-router';
import { useRecoilState } from 'recoil';
import { userInfoAtomFamily } from 'atoms/container';

function GroupChatting() {
  const [userChat, setUserChat] = useState<string>('');
  const [chat, setChat] = useState<ChatMessageType[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [userName] = useRecoilState(userInfoAtomFamily('name'));
  const [userImage] = useRecoilState(userInfoAtomFamily('image'));
  const [endNum, setEndNum] = useState<number>(0);

  function formatTime(timestamp: number): string {
    const date = new Date(timestamp);
    const now = new Date();
    const timeDiff = now.getTime() - date.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff === 0) {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? '오후' : '오전';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes.toString().padStart(2, '0');
      return `${ampm} ${formattedHours}:${formattedMinutes}`;
    } else if (daysDiff === 1) {
      return '어제';
    } else {
      return `${daysDiff}일 전`;
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserChat(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (userChat !== '') {
        set(
          ref(
            db,
            `chattings/${location.state.groupName}/chat/` + `${endNum + 1}`
          ),
          {
            img: userImage ? userImage : null,
            name: userName,
            chat: userChat,
            createdAt: Date.now(),
          }
        );
        setUserChat('');
      }
    }
  };

  const sendChat = () => {
    if (userChat !== '') {
      set(
        ref(
          db,
          `chattings/${location.state.groupName}/chat/` + `${endNum + 1}`
        ),
        {
          img: userImage ? userImage : null,
          name: userName,
          chat: userChat,
          createdAt: Date.now(),
        }
      );
      setUserChat('');
    }
  };

  useEffect(() => {
    const chatRef = ref(db, `chattings/${location.state.groupName}/chat`);

    const unscribe: Unsubscribe = onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messages: ChatMessageType[] = Object.values(data);
        setEndNum(messages.length);
        setChat(messages);
      }
    });

    return () => {
      off(chatRef, 'value', unscribe);
    };
  }, []);

  useEffect(() => {
    scrollRef.current!.scrollTop = scrollRef.current!.scrollHeight;
  }, [chat]);

  return (
    <>
      <S.GroupChattingLayout>
        <S.ChattingLayout>
          <GroupPageHeader title={location.state.groupName} />
          <S.ChattingWrapper ref={scrollRef}>
            {chat &&
              chat.map((data: ChatMessageType, idx) => (
                <div key={idx}>
                  {data.name !== userName && (
                    <S.ChatWrapper>
                      <S.MemberWrapper>
                        <S.MemberBox>
                          <S.MemberProfile image={data.img} />
                          <S.MemberName>{data.name}</S.MemberName>
                        </S.MemberBox>
                        <S.ChattingBox>
                          <S.Chatting>
                            <S.ChattingText>{data.chat}</S.ChattingText>
                          </S.Chatting>
                          <S.Time>{formatTime(data.createdAt)}</S.Time>
                        </S.ChattingBox>
                      </S.MemberWrapper>
                      <div></div>
                    </S.ChatWrapper>
                  )}
                  {data.name === userName && (
                    <S.ChatWrapper>
                      <div></div>
                      <S.MyChatBox>
                        <S.MyChatting>
                          <S.MyChatText>{data.chat}</S.MyChatText>
                        </S.MyChatting>
                        <S.MyChatTime>
                          {formatTime(data.createdAt)}
                        </S.MyChatTime>
                      </S.MyChatBox>
                    </S.ChatWrapper>
                  )}
                </div>
              ))}
          </S.ChattingWrapper>
          <S.InputBox>
            <S.InputInnerBox>
              <I.LongRectengle />
              <S.Input
                onChange={onChange}
                onKeyPress={handleKeyPress}
                value={userChat}
              ></S.Input>
              <div style={{ cursor: 'pointer' }} onClick={sendChat}>
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
