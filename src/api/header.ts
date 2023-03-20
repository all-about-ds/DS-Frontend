import { createAxios } from 'libs/createAxios';
import { getUser } from 'libs/getUrl';

import tokenService from 'utils/tokenService';

class Header {
  getUserInfo() {
    try {
      return createAxios({
        method: 'GET',
        url: getUser.getUserInfo(),
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Header();
