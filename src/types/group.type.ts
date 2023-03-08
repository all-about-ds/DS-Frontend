export type ManageGroupType = 'create' | 'edit';

export type UserProps = {
  isClicked: boolean;
  handleClick(idx: number): void;
  elementIndex: number;
};

export interface GetGroupListInterface {
  keword: string | undefined;
  page: number;
  size: number;
}

export interface GroupContents {
  size: number;
  page: number;
  groups: [];
}

export interface GroupType {
  groupName: string;
  groupImg: string;
  groupDescription: string;
  groupMaxCount: number;
  groupLeaderImg: string;
  groupLeaderName: string;
  secret: boolean;
}
