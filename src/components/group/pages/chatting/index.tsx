import GroupPageHeader from 'components/group/ui/groupPageHeader';
import * as S from './style';
import * as I from '../../../../assets/svg';
import { useEffect, useRef, useState } from 'react';
import { ChatType } from 'types/chat.type';

function GroupChatting() {
  const [userChat, setUserChat] = useState<string>('');
  const [chattings, setChattings] = useState<ChatType[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserChat(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      return;
    }
  };

  return (
    <>
      <S.GroupChattingLayout>
        <S.ChattingLayout>
          <GroupPageHeader title='채팅방' />
          <S.ChattingWrapper ref={scrollRef}>
            {chattings &&
              chattings.map((chat: ChatType) => (
                <>
                  {!chat.isMine && (
                    <S.MemberWrapper>
                      <S.MemberBox>
                        <S.MemberProfile image={chat.img} />
                        <S.MemberName>{chat.name}</S.MemberName>
                      </S.MemberBox>
                      <S.ChattingBox>
                        <S.Chatting>
                          <S.ChattingText>{chat.chat}</S.ChattingText>
                        </S.Chatting>
                        <S.Time>오후 {chat.createdAt}</S.Time>
                      </S.ChattingBox>
                    </S.MemberWrapper>
                  )}
                  {chat.isMine && (
                    <S.MyChatBox>
                      <S.MyChatting>
                        <S.MyChatText>{chat.chat}</S.MyChatText>
                      </S.MyChatting>
                      <S.MyChatTime>오후 {chat.createdAt}</S.MyChatTime>
                    </S.MyChatBox>
                  )}
                </>
              ))}
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
