import * as S from './style';

function Loader({ isLoading }: { isLoading: boolean }) {
  return (
    <S.LoadingAnimation isLoading={isLoading}>
      <div className='lds-roller'>
        <div className='roll-item' />
        <div className='roll-item' />
        <div className='roll-item' />
        <div className='roll-item' />
        <div className='roll-item' />
        <div className='roll-item' />
        <div className='roll-item' />
        <div className='roll-item' />
      </div>
    </S.LoadingAnimation>
  );
}

export default Loader;
