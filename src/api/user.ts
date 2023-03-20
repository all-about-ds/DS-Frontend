import { createAxios } from 'libs/createAxios';
import { getUser } from 'libs/getUrl';
import tokenService from 'utils/tokenService';

class User {
  getMyInfo() {
    try {
      createAxios({
        method: 'GET',
        url: getUser.getMyInfo(),
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
