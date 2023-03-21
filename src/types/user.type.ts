export interface GetMyInfoInterface {
  idx: number;
  name: string;
  img: string;
  myGroupList: MyGroupListInterface[];
}

export interface MyGroupListInterface {
  idx: number;
  name: string;
  img: string;
}
