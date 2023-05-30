import GroupPageHeader from 'components/group/ui/groupPageHeader';
import * as S from './style';
import * as I from '../../../../assets/svg';
import { useEffect, useRef, useState } from 'react';
import { ChatMessageType } from 'types/chat.type';
import { child, get, off, ref, set } from '@firebase/database';
import { db } from '../../../../firebase';
import { useLocation } from 'react-router';
import { useRecoilState } from 'recoil';
import { userInfoAtomFamily } from 'atoms/container';
import { uid } from 'uid';

function GroupChatting() {
  const [userChat, setUserChat] = useState<string>('');
  const [chat, setChat] = useState<ChatMessageType[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [userName] = useRecoilState(userInfoAtomFamily('name'));
  const [userImage] = useRecoilState(userInfoAtomFamily('image'));
  const dbRef = ref(db);
  const uuid = uid();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserChat(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (userChat !== '') {
        set(
          ref(db, `chattings/${location.state.groupName}/chat/` + `${uuid}`),
          {
            img: userImage ? userImage : null,
            name: userName,
            chat: userChat,
            isMine: true,
          }
        );
        setUserChat('');
      }
    }
  };

  const sendChat = () => {
    if (userChat !== '') {
      set(ref(db, `chattings/${location.state.groupName}/chat/` + `${uuid}`), {
        img: userImage ? userImage : null,
        name: userName,
        chat: userChat,
        isMine: true,
      });
      setUserChat('');
    }
  };

  useEffect(() => {
    get(child(dbRef, `chattings/${location.state.groupName}/chat`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setChat(Object.values(snapshot.val()));

          console.log(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.log(error);
      });

    const chatRef = ref(db, `chattings/${location.state.groupName}/chat`);

    const handleChatUpdate = (snapshot: any) => {
      const data = snapshot.val();

      if (data) {
        setChat(Object.values(data));
      } else {
        setChat([]);
      }
    };

    return () => {
      off(chatRef, 'value', handleChatUpdate);
    };
  }, []);

  return (
    <>
      <S.GroupChattingLayout>
        <S.ChattingLayout>
          <GroupPageHeader title={location.state.groupName} />
          <S.ChattingWrapper ref={scrollRef}>
            {chat &&
              chat.map((data: ChatMessageType, idx) => (
                <div key={idx}>
                  {!data.isMine && (
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
                          <S.Time>오후 {data.createdAt}</S.Time>
                        </S.ChattingBox>
                      </S.MemberWrapper>
                      <div></div>
                    </S.ChatWrapper>
                  )}
                  {data.isMine && (
                    <S.ChatWrapper>
                      <div></div>
                      <S.MyChatBox>
                        <S.MyChatting>
                          <S.MyChatText>{data.chat}</S.MyChatText>
                        </S.MyChatting>
                        <S.MyChatTime>오후 {data.createdAt}</S.MyChatTime>
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
                onKeyDown={handleKeyPress}
                onClick={sendChat}
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
