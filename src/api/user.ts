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

  changeProfileImage(profileImage: string) {
    try {
      return createAxios({
        method: 'PATCH',
        url: getUser.changeProfileImage(),
        data: {
          updateUserProfile: profileImage,
        },
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  withdrawal() {
    try {
      return createAxios({
        method: 'DELETE',
        url: 'user',
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  getUserId() {
    try {
      return createAxios({
        method: 'GET',
        url: 'chat',
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
