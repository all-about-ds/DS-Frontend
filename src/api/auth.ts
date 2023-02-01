import { createAxios } from 'libs/createAxios';
import { getAuth } from 'libs/getUrl';
import { LoginInterface } from 'types/auth.type';
import tokenService from 'utils/tokenService';

class Auth {
  signin(data: LoginInterface) {
    try {
      return createAxios({
        method: 'POST',
        url: getAuth.signin(),
        data: {
          email: data.email,
          password: data.password,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
