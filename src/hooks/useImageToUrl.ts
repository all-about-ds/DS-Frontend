import image from 'api/image';
import { ImagesAtom } from 'atoms';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';

function useImageToUrl() {
  const [imageUrl, setImageUrl] = useRecoilState<string>(ImagesAtom);

  const postImage = async (imageFile: any) => {
    try {
      const formData = new FormData();
      if (!imageFile) return;
      formData.append('file', imageFile);

      const response: any = await image.postImage(formData);
      setImageUrl(response.data.image);
    } catch (e: any) {
      if (e.response.status === 500) {
        toast.error('새로고침 후 다시 시도해주세요!');
      }
      setImageUrl('');
    }
  };
  return { postImage, imageUrl };
}

export default useImageToUrl;
