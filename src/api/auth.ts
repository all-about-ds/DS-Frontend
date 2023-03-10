import { createAxios } from 'libs/createAxios';
import { getAuth } from 'libs/getUrl';
import { LoginInterface } from 'types/auth.type';

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

  sendAuthenticationNumber(email: string) {
    try {
      return createAxios({
        method: 'POST',
        url: getAuth.sendAuthenticationNumber(),
        params: {
          email: email,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
