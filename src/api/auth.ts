import { createAxios } from 'libs/createAxios';
import { getAuth } from 'libs/getUrl';
import { LoginInterface } from 'types/auth.type';

class Auth {
  async signin(data: LoginInterface) {
    try {
      const response = await createAxios.post(getAuth.signin(), {
        email: data.email,
        password: data.password,
      });

      localStorage.setItem('token', JSON.stringify(response.data));
      if (localStorage.getItem('token') === null) {
        throw new Error(`No token`);
      }

      return response.status;
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
