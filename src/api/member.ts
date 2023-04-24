import { createAxios } from 'libs/createAxios';
import { getMember } from 'libs/getUrl';
import tokenService from 'utils/tokenService';

class Member {
  leaveGroup(groupId: string) {
    try {
      return createAxios({
        method: 'DELETE',
        url: getMember.leaveGroup() + groupId,
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Member();
