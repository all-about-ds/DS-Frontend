import { createAxios } from 'libs/createAxios';
import { getAuth } from 'libs/getUrl';
import { LoginInterface } from 'types/auth.type';
import tokenService from 'utils/tokenService';

class Auth {
  async signin(data: LoginInterface) {
    try {
      const response = await createAxios.post(getAuth.signin(), {
        email: data.email,
        password: data.password,
      });

      tokenService.setLocalToken(response);

      return response.status;
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
