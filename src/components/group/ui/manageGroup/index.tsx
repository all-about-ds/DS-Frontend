import { Input } from 'components/auth/ui/input/style';
import { useState } from 'react';
import { CreateGroupInterface, ManageGroupType } from 'types/group.type';
import * as S from './style';
import * as I from '../../../../assets/svg';
import { useForm } from 'react-hook-form';
import { ImagesAtom, ImageSrcAtom } from 'atoms/container';
import { useRecoilState } from 'recoil';
import group from 'api/group';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

function ManageGroup({ groupType }: { groupType: ManageGroupType }) {
  const [imageSrc, setImageSrc] = useRecoilState<File[]>(ImageSrcAtom);
  const [image, setImages] = useRecoilState<string>(ImagesAtom);
  const [memberNum, setMemberNum] = useState<number>(1);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CreateGroupInterface>();

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

  const onValid = async (data: CreateGroupInterface) => {
    try {
      const formData = new FormData();
      if (!imageSrc) return;
      imageSrc.forEach((img) => formData.append('file', img));
      const reqDto = {
        name: data.name,
        description: data.description,
        img: data.img,
        maxCount: memberNum,
        secret: isClicked,
        password: isClicked ? data.password : undefined,
      };
      formData.append(
        'req',
        new Blob([JSON.stringify(reqDto)], { type: 'application/json' })
      );
      await group.createGroup(formData);
      toast.success('생성되었어요!');
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  const inValid = () => {
    return;
  };

  const encodeFileToBase64 = async (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    reader.onload = () => {
      if (reader.result) {
        setImages(reader.result.toString());
      }
    };
  };

  const deleteImg = (index: number) => {
    setImages('');
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
          <form onSubmit={handleSubmit(onValid, inValid)}>
            <S.BoldText>그룹 이름</S.BoldText>
            <Input
              placeholder='그룹 이름을 입력해주세요.'
              {...register('name', {
                required: '이름은 필수 입력입니다.',
              })}
            ></Input>

            <S.BoldText style={{ marginTop: '1.5rem' }}>그룹 설명</S.BoldText>
            <S.Input
              placeholder='어떤 그룹인지 설명해주세요.'
              {...register('description', {
                required: '설명은 필수 입력입니다.',
              })}
            ></S.Input>

            <S.TextWrapper>
              <S.BoldText style={{ marginTop: '2.5rem' }}>배너 사진</S.BoldText>
              {image && (
                <>
                  <S.ChangeButton
                    type={'file'}
                    onChange={(e) => {
                      setImageSrc([...imageSrc, e.target.files![0]]);
                      encodeFileToBase64(e.target.files![0]);
                    }}
                    id={'image'}
                  />
                  <S.ChangeText htmlFor='image'>변경</S.ChangeText>
                </>
              )}
            </S.TextWrapper>
            <S.ImageBox>
              {image && <S.UploadedImage image={image}></S.UploadedImage>}
              <S.ImageArea
                type={'file'}
                onChange={(e) => {
                  setImageSrc([...imageSrc, e.target.files![0]]);
                  encodeFileToBase64(e.target.files![0]);
                }}
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
                <Input
                  placeholder='비밀번호를 입력해주세요'
                  type='password'
                  {...register('password', {
                    required: '비밀번호는 필수 입력입니다.',
                    pattern: {
                      value: /^[0-9]{4}$/,
                      message: '숫자 4자리를 입력해주세요',
                    },
                  })}
                />
              </>
            )}

            <S.SubmithButtonBox>
              <S.CancelButton>취소</S.CancelButton>
              <S.SubmitButton>완료</S.SubmitButton>
            </S.SubmithButtonBox>
          </form>
        </S.ElementsWrapper>
      </S.Layout>
    </>
  );
}

export default ManageGroup;
