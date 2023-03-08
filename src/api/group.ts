import { createAxios } from 'libs/createAxios';
import { getGroup } from 'libs/getUrl';
import { GetGroupListInterface } from 'types/group.type';

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
}

// + `?page=${page}&size=${size}`
export default new Group();
