import styled from '@emotion/styled';

export const FirstSectionLayout = styled.form<{ isLoading: boolean }>`
  position: relative;
  margin: 2rem 0 -1rem 0;
  width: 18vw;
  min-width: 300px;
  pointer-events: ${(e) => e.isLoading && 'none'};

  .lds-roller {
    display: inline-block;
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

export const LoadingGif = styled.img`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 75px;
  height: 75px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  min-width: 284px;
  margin: 0 auto 24px;
`;

export const InputTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  margin-left: 8px;
  margin: 0 0 10px 8px;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background: #232323;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  padding: 13px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

  :focus {
    outline: none;
  }
`;

export const Description = styled.article`
  text-align: center;
  color: white;
  margin-top: 7rem;
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

export const ErrorText = styled.p<{ isError: boolean }>`
  display: ${(e) => (e.isError ? 'block' : 'none')};
  color: #ee3939;
  font-size: 13px;
  text-align: center;
  margin-bottom: -2.2rem;
`;
