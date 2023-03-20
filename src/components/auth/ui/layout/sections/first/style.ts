import styled from '@emotion/styled';

export const FirstSectionLayout = styled.form<{ isLoading: boolean }>`
  position: relative;
  margin: 2rem 0 -1rem 0;
  width: 18vw;
  min-width: 300px;
  pointer-events: ${(e) => e.isLoading && 'none'};

  .lds-roller {
    display: ${(e) => (e.isLoading ? 'inline-block' : 'none')};
    position: absolute;
    width: 80px;
    height: 80px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -135%);
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .lds-roller div:after {
    content: ' ';
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
  }
  .lds-roller div:nth-of-type(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-of-type(1):after {
    top: 63px;
    left: 63px;
  }
  .lds-roller div:nth-of-type(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-of-type(2):after {
    top: 68px;
    left: 56px;
  }
  .lds-roller div:nth-of-type(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-of-type(3):after {
    top: 71px;
    left: 48px;
  }
  .lds-roller div:nth-of-type(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-of-type(4):after {
    top: 72px;
    left: 40px;
  }
  .lds-roller div:nth-of-type(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-of-type(5):after {
    top: 71px;
    left: 32px;
  }
  .lds-roller div:nth-of-type(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-of-type(6):after {
    top: 68px;
    left: 24px;
  }
  .lds-roller div:nth-of-type(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-of-type(7):after {
    top: 63px;
    left: 17px;
  }
  .lds-roller div:nth-of-type(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-of-type(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingAnimation = styled.div``;

export const Description = styled.article<{ isError: string | undefined }>`
  text-align: center;
  color: white;
  margin-top: ${(e) => (e.isError ? '5rem' : '7.1rem')};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
    margin: 8.5rem 0 1rem;
  }
`;

export const ErrorText = styled.p`
  color: #ee3939;
  font-size: 13px;
  margin: 0 0 0 0.5rem;
`;
