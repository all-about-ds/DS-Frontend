import { createAxios } from 'libs/createAxios';
import { getGroup } from 'libs/getUrl';
import { CreateGroupInterface, GetGroupListInterface } from 'types/group.type';
import tokenService from 'utils/tokenService';

class Group {
  getGroupList(data: GetGroupListInterface) {
    try {
      return createAxios({
        method: 'GET',
        url: data.popularity
          ? getGroup.getList() + '/popularity'
          : getGroup.getList(),
        params: {
          page: data.page,
          size: data.size,
          keyword: data.keyword,
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

  createGroup(data: CreateGroupInterface) {
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

  editGroup(data: CreateGroupInterface, index: number) {
    try {
      return createAxios({
        method: 'PATCH',
        url: getGroup.getList() + `/${index}`,
        data,
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  kickMember(groupId: number, memberId: number) {
    try {
      return createAxios({
        method: 'DELETE',
        url: getGroup.kickMember() + groupId + '/' + memberId,
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  mandateMember(groupId: number, memberId: number) {
    try {
      return createAxios({
        method: 'POST',
        url: getGroup.mandateMember() + groupId + '/' + memberId,
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  deleteGroup(index: number | undefined) {
    try {
      return createAxios({
        method: 'DELETE',
        url: getGroup.deleteGroup() + `${index}`,
        headers: {
          Authorization: 'Bearer ' + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  getIsMember(idx: number | undefined) {
    try {
      return createAxios({
        method: 'GET',
        url: getGroup.getModalDetail() + `${idx}`,
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
