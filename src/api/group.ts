import { createAxios } from 'libs/createAxios';
import { getGroup } from 'libs/getUrl';
import { GetGroupListInterface } from 'types/group.type';
import tokenService from 'utils/tokenService';

class Group {
  getGroupList(data: GetGroupListInterface) {
    try {
      return createAxios({
        method: 'GET',
        url: getGroup.getList(),
        params: {
          page: data.page,
          size: data.size,
          keword: data.keword,
        },
      });
    } catch (error) {
      return error;
    }
  }

  getGroupModalDetail(index: number) {
    try {
      return createAxios({
        method: 'GET',
        url: getGroup.getModalDetail() + `${index}`,
      });
    } catch (error) {
      return error;
    }
  }

  joinGroup(password: string | undefined, index: number | undefined) {
    try {
      return createAxios({
        method: 'POST',
        url: getGroup.joinGroup() + `/${index}`,
        params: {
          password: password,
        },
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  getGroupInformation(groupId: string) {
    try {
      return createAxios({
        method: 'GET',
        url: getGroup.getGroupInformation() + groupId,
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  createGroup(data: FormData) {
    try {
      return createAxios({
        method: 'POST',
        url: getGroup.getList(),
        data,
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Group();
