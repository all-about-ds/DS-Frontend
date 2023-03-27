import image from 'api/image';
import { useState } from 'react';

function useImageToUrl() {
  const [imageUrl, setImageUrl] = useState<string>('');

  const postImage = async (imageFile: any) => {
    try {
      const formData = new FormData();
      if (!imageFile) return;
      formData.append('file', imageFile);

      const response: any = await image.postImage(formData);
      setImageUrl(response.data.image);
    } catch (e) {
      console.log(e);
    }
  };
  return { postImage, imageUrl };
}

export default useImageToUrl;
