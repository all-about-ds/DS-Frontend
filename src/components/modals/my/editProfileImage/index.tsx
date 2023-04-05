import { useRef } from 'react';
import MyPageModalLayout from '../layout';
import * as S from './style';

function EditProfileImageModal() {
  const setImage = useRef<HTMLInputElement>(null);

  const uploadButtonClick = (e: any) => {
    e.preventDefault();
    setImage.current?.click();
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
          />
          <S.EmotikonBox onClick={uploadButtonClick}>📷</S.EmotikonBox>
          <S.Text>업로드</S.Text>
        </div>
      </S.ImageUploadSection>
      <S.Description>이미지를 업로드 해주세요</S.Description>
      <S.SubmitButton>완료</S.SubmitButton>
    </MyPageModalLayout>
  );
}

export default EditProfileImageModal;
