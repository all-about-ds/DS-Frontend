export interface GetMyInfoInterface {
  idx: number;
  name: string;
  profileImg: string;
  groups: MyGroupListInterface[];
}

export interface MyGroupListInterface {
  idx: number;
  name: string;
  img: string;
}

export interface TimerUserInterface {
  name: string;
  time: number;
  active: boolean;
  id: number;
}
