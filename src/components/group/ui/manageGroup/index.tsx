import { Input } from 'components/auth/ui/input/style';
import { useEffect, useState } from 'react';
import { CreateGroupInterface, ManageGroupType } from 'types/group.type';
import * as S from './style';
import * as I from '../../../../assets/svg';
import { useForm } from 'react-hook-form';
import { ImagesAtom, userInfoAtomFamily } from 'atoms/container';
import { useRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';
import useImageToUrl from 'hooks/useImageToUrl';
import group from 'api/group';
import { get, ref, set } from 'firebase/database';
import { db } from '../../../../firebase';

interface FormType {
  name: string;
  description: string;
  password: string | undefined;
}

function ManageGroup({ groupType }: { groupType: ManageGroupType }) {
  const [image, setImage] = useRecoilState<string>(ImagesAtom);
  const [memberNum, setMemberNum] = useState<number>(2);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [userName] = useRecoilState(userInfoAtomFamily('name'));
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit } = useForm<FormType>();
  const { postImage } = useImageToUrl();

  const memberUp = () => {
    if (memberNum !== 7) {
      setMemberNum(memberNum + 1);
    } else {
      toast.error('현재 인원보다 높게 설정할 수 없어요!');
    }
  };

  const memberDown = () => {
    if (memberNum !== 2 && memberNum !== location.state.maxCount + 1) {
      setMemberNum(memberNum - 1);
    } else {
      toast.error('현재 인원보다 낮게 설정할 수 없어요!');
    }
  };

  const changePrivatePublic = () => {
    setIsClicked(!isClicked);
  };

  const onValid = async (data: FormType) => {
    if (image) {
      try {
        if (data.password && !/^[0-9]{4}$/.test(data.password)) {
          toast.error('숫자 4자리를 입력해주세요!');
          return;
        }

        const req: CreateGroupInterface = {
          name: data.name,
          description: data.description,
          img: image,
          maxCount: memberNum !== 1 ? memberNum : 2,
          secret: isClicked,
          password: data.password,
        };

        if (groupType === 'create') {
          await group.createGroup(req);
          set(ref(db, `timers/${data.name}/users/${userName}`), {
            name: userName,
            time: 0,
            active: false,
          });
          toast.success('생성되었어요!');
        }

        if (groupType === 'edit') {
          if (location.state.title !== req.name) {
            const prevChatRef = ref(db, `chattings/${location.state.title}`);
            const prevTimerRef = ref(db, `timers/${location.state.title}`);
            get(prevChatRef).then((snapshot) => {
              if (snapshot.exists()) {
                const data = snapshot.val();

                const newChatRef = ref(db, `chattings/${req.name}`);
                set(newChatRef, data).then(() => {
                  set(prevChatRef, null)
                    .then()
                    .catch(() => {
                      toast.error('오류가 발생했어요!');
                    });
                });
              }
            });
            get(prevTimerRef).then((snapshot) => {
              if (snapshot.exists()) {
                const data = snapshot.val();

                const newTimerRef = ref(db, `timers/${req.name}`);
                set(newTimerRef, data).then(() => {
                  set(prevTimerRef, null)
                    .then()
                    .catch(() => {
                      toast.error('오류가 발생했어요!');
                    });
                });
              }
            });
          }
          await group.editGroup(req, location.state.idx);
          toast.success('수정되었어요!');
        }

        setImage('');
        navigate('/');
      } catch (e: any) {
        if (e.response.status === 400) {
          toast.error('잘못된 형식의 요청이에요!');
        } else if (e.response.status === 401) {
          toast.error('새로고침 후 다시 시도해주세요!');
        } else if (e.response.status === 409) {
          toast.error('이미 존재하는 이름이에요!');
        }
      }
    } else {
      toast.error('그룹 배너 사진이 없어요');
    }
  };

  const inValid = (e: any) => {
    const name = e?.name;
    const desc = e?.description;

    if (name && desc && name.type === 'required' && desc.type === 'required') {
      toast.error('이름과 설명은 필수 입력입니다.');
    } else if (name && name.type === 'required') {
      toast.error(name.message);
    } else if (desc && desc.type === 'required') {
      toast.error(desc.message);
    } else if (name && name.type === 'maxLength') {
      toast.error('그룹 이름은 최대 16자 입니다');
    } else if (desc && desc.type === 'maxLength') {
      toast.error('그룹 설명은 최대 100자 입니다');
    }
  };

  const encodeFileToBase64 = async (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    reader.onload = () => {
      if (reader.result) {
        postImage(fileBlob);
      }
    };
  };

  useEffect(() => {
    if (location.state.img) {
      setImage(location.state.img);
      setMemberNum(location.state.maxCount + 1);
    } else {
      setImage('');
    }
  }, []);

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
          <form onSubmit={handleSubmit(onValid, inValid)}>
            <S.BoldText>그룹 이름</S.BoldText>
            <Input
              placeholder='그룹 이름을 입력해주세요.'
              {...register('name', {
                required: '이름은 필수 입력입니다.',
                maxLength: 16,
              })}
              defaultValue={groupType === 'create' ? '' : location.state.title}
            ></Input>

            <S.BoldText style={{ marginTop: '1.5rem' }}>그룹 설명</S.BoldText>
            <S.Input
              placeholder='그룹을 설명해주세요 (100자 이내)'
              {...register('description', {
                required: '설명은 필수 입력입니다.',
                maxLength: 100,
              })}
              defaultValue={
                groupType === 'create' ? '' : location.state.description
              }
            ></S.Input>

            <S.TextWrapper>
              <S.BoldText style={{ marginTop: '2.5rem' }}>배너 사진</S.BoldText>
              {image && (
                <>
                  <S.ChangeButton
                    type={'file'}
                    onChange={(e) => {
                      if (!e.target?.files) return;
                      encodeFileToBase64(e.target.files[0]);
                    }}
                    id={'image'}
                    accept='image/*'
                  />
                  <S.ChangeText htmlFor='image'>변경</S.ChangeText>
                </>
              )}
            </S.TextWrapper>
            <S.ImageBox>
              {image && (
                <S.UploadedImage src={image} alt='그룹이미지'></S.UploadedImage>
              )}
              <S.ImageArea
                type={'file'}
                onChange={(e) => {
                  if (!e.target?.files) return;
                  encodeFileToBase64(e.target.files[0]);
                }}
                accept='image/*'
                id={'imageBox'}
              />
              <S.ImageLabel htmlFor='imageBox'>
                <S.SmallBox>
                  <I.Photo />
                </S.SmallBox>
                <S.ImageText>이미지 업로드</S.ImageText>
              </S.ImageLabel>
            </S.ImageBox>

            <S.BoldText style={{ marginTop: '2.5rem' }}>인원</S.BoldText>
            <S.MemberBox>
              <S.MemberTextWrapper>
                <S.Member>{memberNum < 2 ? 2 : memberNum}</S.Member>
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
                <Input
                  placeholder='숫자 4자리를 입력해주세요'
                  type='password'
                  {...register('password', {
                    required: '비밀번호는 필수 입력입니다.',
                  })}
                />
              </>
            )}

            <S.SubmithButtonBox>
              <S.CancleButton onClick={() => navigate(-1)}>취소</S.CancleButton>
              <S.SubmitButton>완료</S.SubmitButton>
            </S.SubmithButtonBox>
          </form>
        </S.ElementsWrapper>
      </S.Layout>
    </>
  );
}

export default ManageGroup;
