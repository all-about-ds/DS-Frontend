export type ManageGroupType = 'create' | 'edit';

export type UserProps = {
  isClicked: boolean;
  handleClick(idx: number): void;
  elementIndex: number;
  idx: number;
  name: string;
  profileImg: string;
};

export interface GetGroupListInterface {
  keyword: string | undefined;
  page: number;
  size: number;
}

export interface GroupContents {
  size: number;
  page: number;
  groups: [];
}

export interface GroupType {
  idx: number;
  name: string;
  img: string;
  description: string;
  memberCount: number;
  maxCount: number;
  leaderImg: string;
  leaderName: string;
  secret: boolean;
}

export type PasswordType = {
  password: string | undefined;
};

export interface MemberType {
  idx: number;
  name: string;
  profileImg: string;
}

export interface GroupInformationInterface {
  idx: number;
  name: string;
  img: string;
  description: string;
  host: boolean;
  head: {
    idx: number;
    name: string;
    profileImg: string;
  };
  memberList: MemberType[];
}

export interface CreateGroupInterface {
  name: string;
  description: string;
  img: string;
  maxCount: number;
  secret: boolean;
  password: string | undefined;
}
