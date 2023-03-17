import { createAxios } from 'libs/createAxios';
import { getHeader } from 'libs/getUrl';
import tokenService from 'utils/tokenService';

class Header {
  getUserInfo() {
    try {
      return createAxios({
        method: 'GET',
        url: getHeader.getUserInfo(),
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
