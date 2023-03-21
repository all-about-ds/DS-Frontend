import { createAxios } from 'libs/createAxios';
import { getUser } from 'libs/getUrl';
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

  changeName(name: string) {
    try {
      return createAxios({
        method: 'PATCH',
        url: getUser.changeName(),
        data: {
          name: name,
        },
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new User();
