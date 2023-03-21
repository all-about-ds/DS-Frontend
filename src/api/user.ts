import { createAxios } from 'libs/createAxios';
import tokenService from 'utils/tokenService';

class User {
  getMyInfo() {
    try {
      return createAxios({
        method: 'GET',
        url: 'user',
        headers: {
          Authorization: tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new User();
