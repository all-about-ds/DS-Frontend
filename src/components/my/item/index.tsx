import { MyGroupListInterface } from 'types/user.type';
import * as S from './style';

function MyGroupItem(props: MyGroupListInterface) {
  return (
    <S.GroupItem>
      <S.ItemBackgroundImage src={props.img} alt='그룹 이미지' />
      <S.Shadow>
        <S.ItemName>{props.name}</S.ItemName>
      </S.Shadow>
    </S.GroupItem>
  );
}

export default MyGroupItem;
