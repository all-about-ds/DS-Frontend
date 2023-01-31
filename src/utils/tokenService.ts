import { TokenInterface } from 'types/token';

class TokenService {
  setLocalToken(response: any) {
    localStorage.setItem('token', JSON.stringify(response.data));
    if (localStorage.getItem('token') === null) {
      throw new Error(`No token`);
    }
  }
  getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem('token') || '{}');
    return user?.refreshToken;
  }
  getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem('token') || '{}');
    return user?.accessToken;
  }
  updateLocalAccessToken(token: string) {
    const user = JSON.parse(localStorage.getItem('token') || '{}');
    user.accessToken = token;
    localStorage.setItem('token', JSON.stringify(user));
  }
  getUser() {
    return JSON.parse(localStorage.getItem('token') || '{}');
  }
  setUser(user: TokenInterface) {
    localStorage.setItem('token', JSON.stringify(user));
  }
  removeUser() {
    localStorage.removeItem('token');
  }
}

export default new TokenService();
