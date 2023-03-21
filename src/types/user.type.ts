export interface GetMyInfoInterface {
  idx: number;
  name: string;
  img: string;
  groups: MyGroupListInterface[];
}

export interface MyGroupListInterface {
  idx: number;
  name: string;
  img: string;
}
