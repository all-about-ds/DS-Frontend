import { createAxios } from 'libs/createAxios';
import { postImage } from 'libs/getUrl';
import tokenService from 'utils/tokenService';

class Image {
  postImage(data: FormData) {
    try {
      return createAxios({
        method: 'POST',
        url: postImage.postImage(),
        data,
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Image();
