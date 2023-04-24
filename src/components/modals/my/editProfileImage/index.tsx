import { useEffect, useRef } from 'react';
import MyPageModalLayout from '../layout';
import * as S from './style';
import useImageToUrl from 'hooks/useImageToUrl';
import { ImagesAtom, modalAtomFamily } from 'atoms';
import { useRecoilState } from 'recoil';
import user from 'api/user';
import { toast } from 'react-toastify';

function EditProfileImageModal() {
  const setImage = useRef<HTMLInputElement>(null);
  const [uploadedImage, setUplodedAtom] = useRecoilState<string>(ImagesAtom);
  const [, setModal] = useRecoilState(modalAtomFamily('editProfileImage'));
  const { postImage } = useImageToUrl();

  useEffect(() => setUplodedAtom(''), []);

  const uploadButtonClick = (e: any) => {
    e.preventDefault();
    setImage.current?.click();
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

  const onProfileImageChange = async () => {
    if (uploadedImage) {
      try {
        await user.changeProfileImage(uploadedImage);
        toast.success('이미지를 변경했어요');
        window.location.reload();
      } catch {
        toast.error('알 수 없는 오류입니다');
        setModal(false);
      }
    }
    setModal(false);
  };

  return (
    <MyPageModalLayout title='프로필 사진 변경' atomKey='editProfileImage'>
      <S.ImageUploadSection>
        <div>
          <input
            ref={setImage}
            type={'file'}
            id={'profile'}
            accept={'image/*'}
            name={'file'}
            onChange={(e) => {
              if (!e.target?.files) return;
              encodeFileToBase64(e.target.files[0]);
            }}
          />
          {uploadedImage && (
            <S.UploadedImageChange onClick={uploadButtonClick}>
              변경
            </S.UploadedImageChange>
          )}
          {uploadedImage && (
            <S.UploadedImage src={uploadedImage} onClick={uploadButtonClick} />
          )}
          {!uploadedImage && (
            <>
              <S.EmotikonBox onClick={uploadButtonClick}>📷</S.EmotikonBox>
              <S.Text>업로드</S.Text>
            </>
          )}
        </div>
      </S.ImageUploadSection>
      <S.Description>이미지를 업로드 해주세요</S.Description>
      <S.SubmitButton onClick={onProfileImageChange}>완료</S.SubmitButton>
    </MyPageModalLayout>
  );
}

export default EditProfileImageModal;
