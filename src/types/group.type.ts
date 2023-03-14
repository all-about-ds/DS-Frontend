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

interface MemberType {
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
